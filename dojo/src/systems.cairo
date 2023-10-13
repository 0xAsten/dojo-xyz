#[system]
mod spawn {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::{Into, TryInto};
    use option::OptionTrait;
    use dojo::world::Context;

    use dojo_examples::components::Position;
    use dojo_examples::components::Moves;
    use dojo_examples::constants::OFFSET;

    fn modifier(attribute: u32) -> u32 {
        let modifier = (attribute - 8) / 2;

        modifier
    }

    fn execute(ctx: Context, str: u32, dex: u32, con: u32, int: u32, wis: u32, cha: u32) {
        let quest = get!(ctx.world, ctx.origin, Quest);

        let quest_state = quest.quest_state;
        assert(quest_state == 0, "Quest already started");

        let quest_id = quest.quest_id + 1; 
        
        let total = str + dex + con + int + wis + cha;
        assert(total <= 7, "Points too large");

        let str = 8 + str;
        let dex = 8 + dex;
        let con = 8 + con;
        let int = 8 + int;
        let wis = 8 + wis;
        let cha = 8 + cha;

        let str_modifier = modifier(str);
        let dex_modifier = modifier(dex);
        let con_modifier = modifier(con);
        let int_modifier = modifier(int);
        let wis_modifier = modifier(wis);
        let cha_modifier = modifier(cha);

        set!(
            ctx.world,
            (   Attributes {
                    player: ctx.origin,
                    quest_id: quest_id,
                    entity_id: 0,
                    str: str,
                    dex: dex,
                    con: con,
                    int: int,
                    wis: wis,
                    cha: cha,
                    str_modifier: str_modifier,
                    dex_modifier: dex_modifier,
                    con_modifier: con_modifier,
                    int_modifier: int_modifier,
                    wis_modifier: wis_modifier,
                    cha_modifier: cha_modifier,
                },
                Stats {
                    player: ctx.origin,
                    quest_id: quest_id,
                    entity_id: 0,
                    ac: 10 + dex_modifier,
                    hp: 10 + con_modifier,
                    damage_dice: 4,
                },
                Position {
                    player: ctx.origin, 
                    quest_id: quest_id,
                    entity_id: 0,
                    x: 0, 
                    y: 0
                },
                Quest {
                    player: ctx.origin,
                    quest_id: quest_id,
                    quest_state: 0,
                },
            )
        );

        set!(
            ctx.world,
            (   Attributes {
                    player: ctx.origin,
                    quest_id: quest_id,
                    entity_id: 1,
                    str: 10,
                    dex: 10,
                    con: 10,
                    int: 8,
                    wis: 9,
                    cha: 8,
                    str_modifier: 1,
                    dex_modifier: 1,
                    con_modifier: 1,
                    int_modifier: 0,
                    wis_modifier: 0,
                    cha_modifier: 0,
                },
                Stats {
                    player: ctx.origin,
                    quest_id: quest_id,
                    entity_id: 1,
                    ac: 11,
                    hp: 11,
                    damage_dice: 4,
                },
                Position {
                    player: ctx.origin, 
                    quest_id: quest_id,
                    entity_id: 1,
                    x: 10, 
                    y: 10
                },
            )
        );
        return ();
    }
}

#[system]
mod move {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::Into;
    use dojo::world::Context;
    use debug::PrintTrait;

    use dojo_examples::components::Position;
    use dojo_examples::components::Moves;

    #[derive(Serde, Drop)]
    enum Direction {
        Left: (),
        Right: (),
        Up: (),
        Down: (),
    }

    impl DirectionIntoFelt252 of Into<Direction, felt252> {
        fn into(self: Direction) -> felt252 {
            match self {
                Direction::Left(()) => 0,
                Direction::Right(()) => 1,
                Direction::Up(()) => 2,
                Direction::Down(()) => 3,
            }
        }
    }

    fn execute(ctx: Context, direction: Direction) {
        let (mut position, mut moves) = get!(ctx.world, ctx.origin, (Position, Moves));
        moves.remaining -= 1;
        let next = next_position(position, direction);
        set!(ctx.world, (moves, next));
        return ();
    }

    fn next_position(mut position: Position, direction: Direction) -> Position {
        match direction {
            Direction::Left(()) => {
                position.x -= 1;
            },
            Direction::Right(()) => {
                position.x += 1;
            },
            Direction::Up(()) => {
                position.y -= 1;
            },
            Direction::Down(()) => {
                position.y += 1;
            },
        };

        position
    }
}

