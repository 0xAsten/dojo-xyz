#[system]
mod spawn {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::{Into, TryInto};
    use option::OptionTrait;
    use dojo::world::Context;

    use dojo_xyz::components::Attributes;
    use dojo_xyz::components::Stats;
    use dojo_xyz::components::Position;
    use dojo_xyz::components::Quest;

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

    use dojo_xyz::components::Attributes;
    use dojo_xyz::components::Stats;
    use dojo_xyz::components::Position;
    use dojo_xyz::components::Quest;

    fn execute(ctx: Context, x: u32, y: u32) {
        let quest = get!(ctx.world, ctx.origin, Quest);
        let quest_id = quest.quest_id;

        let mut position_player = get!(ctx.world, ctx.origin, quest_id, 0, (Position));
        let mut position_goblin = get!(ctx.world, ctx.origin, quest_id, 1, (Position));

        assert(position_player.x != x || position_player.y != y, "No movement");
        assert(x != position_goblin.x || y != position_goblin.y, "Collision");
        assert(x < 25, "Out of bounds");
        assert(y < 20, "Out of bounds");
        // calculate steps
        let steps = position_playe.move_steps((x, y));
        assert(steps <= 5, "Too many steps");

        position_player.x = x;
        position_player.y = y;

        set!(ctx.world, (position_player));

        // Is Goblin near Player?
        // if not near, determin Goblin's new x and y that to close in the palyer and totoal steps must less than 4
        if !position_player.is_neighbor(Some((position_goblin.x, position_goblin.y))) {
            // move closer
        } else {
            // atack
        }       
        
        return ();
    }

    fn best_goblin_move(player: Position, goblin: Position, grid_width: u32, grid_height: u32) -> Some(x: u32, y: u32) {        
        let mut steps = 0;
        
        loop {
            if steps >= 4 {
                break;
            }
            steps += 1;
            
            let mut best_position = None;
            let neighbors = goblin.neighbors(grid_width, grid_height);
            loop {
                if neighbors.len() == 0 {
                    break;
                }
                let tmp_position = neighbors.pop_front();
                if best_position.is_none() {
                    best_position = tmp_position;
                } else {
                    let tmp_steps = player.move_steps(tmp_position);
                    let best_steps = player.move_steps(best_position);
                    if tmp_steps < best_steps {
                        best_position = tmp_position;
                    }
                }
            }   

            if player.is_neighbor(best_position) {
                break;
            }
        }
        
        best_position
    }
    
}

