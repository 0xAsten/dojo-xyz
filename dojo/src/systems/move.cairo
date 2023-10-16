#[system]
mod move_system {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::Into;
    use dojo::world::Context;
    use debug::PrintTrait;
    use starknet::ContractAddress;

    use dojo_xyz::components::{Attributes, Position, Stats, Quest, PositionTrait};

    fn execute(ctx: Context, x: u32, y: u32) {
        let mut quest = get!(ctx.world, ctx.origin, (Quest));
        let quest_id = quest.quest_id;
        let quest_state = quest.quest_state;
        assert(quest_state == 1, 'Quest stats error');

        let mut position_player = get!(ctx.world, (ctx.origin, quest_id, 0), (Position));
        let mut position_goblin = get!(ctx.world, (ctx.origin, quest_id, 1), (Position));

        assert(position_player.x != x || position_player.y != y, 'No movement');
        assert(x != position_goblin.x || y != position_goblin.y, 'Collision');
        assert(x < 25, 'Out of bounds');
        assert(y < 20, 'Out of bounds');
        // calculate steps
        let steps = position_player.move_steps(Option::Some((x, y)));
        assert(steps <= 5, 'Too many steps');

        position_player.x = x;
        position_player.y = y;

        set!(ctx.world, (position_player));

        // Is Goblin near Player?
        // if not near, determin Goblin's new x and y that to close in the palyer and totoal steps must less than 4
        if !position_player.is_neighbor(Option::Some((position_goblin.x, position_goblin.y))) {
            // move closer
            let new_position = best_goblin_move(position_player, position_goblin, 25, 20);
            match new_position {
                Option::Some((
                    bx, by
                )) => {
                    position_goblin.x = bx;
                    position_goblin.y = by;
                    set!(ctx.world, (position_goblin));
                },
                Option::None(_) => assert(false, 'should have new position'),
            };
        } else {
            // atack
            let mut stats_player = get!(ctx.world, (ctx.origin, quest_id, 0), (Stats));
            let stats_goblin = get!(ctx.world, (ctx.origin, quest_id, 1), (Stats));
            let attributes_player = get!(ctx.world, (ctx.origin, quest_id, 0), (Attributes));
            let attributes_goblin = get!(ctx.world, (ctx.origin, quest_id, 1), (Attributes));

            let (is_hit, roll) = is_hit(attributes_goblin.str_modifier, stats_player.ac);
            if is_hit {
                let mut damage = roll(stats_goblin.damage_dice) + attributes_goblin.str_modifier;
                if roll == 20 {
                    damage += roll(stats_goblin.damage_dice) + attributes_goblin.str_modifier;
                }
                stats_player.hp -= damage;
                set!(ctx.world, (stats_player));

                if stats_player.hp <= 1000 {
                    // player dead
                    quest.quest_state = 2;
                    set!(ctx.world, (quest));
                    return ();
                }
            }
        }

        return ();
    }

    fn best_goblin_move(
        player: Position, goblin: Position, grid_width: u32, grid_height: u32
    ) -> Option<(u32, u32)> {
        let mut steps: u32 = 0;
        let mut best_position: Option<(u32, u32)> = Option::None(());
        loop {
            if steps >= 4 {
                break;
            }
            steps += 1;

            let mut neighbors: Array<(u32, u32)> = goblin.neighbors(grid_width, grid_height);
            loop {
                if neighbors.len() == 0 {
                    break;
                };
                let tmp_position = ArrayTrait::pop_front(ref neighbors);
                if best_position == Option::None(()) {
                    best_position = tmp_position;
                } else {
                    let tmp_steps = player.move_steps(tmp_position);
                    let best_steps = player.move_steps(best_position);
                    if tmp_steps < best_steps {
                        best_position = tmp_position;
                    }
                };
            };

            if player.is_neighbor(best_position) {
                break;
            };
        };

        best_position
    }

    fn is_hit(attacker_modifier: u32, defender_ac: u32) -> (bool, u32) {
        let roll = roll(20);
        let attack_roll = roll + attacker_modifier;
        (attack_roll >= defender_ac, roll)
    }

    fn roll(dice: u32) -> u32 {
        dice
    }
}
