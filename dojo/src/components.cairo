use array::ArrayTrait;
use starknet::ContractAddress;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Attributes {
    #[key]
    player: ContractAddress,
    #[key]
    quest_id: u32,
    #[key]
    entity_id: u32,
    points: u32,
    str: u32, //Strength
    dex: u32, //Dexterity
    con: u32, //Constitution
    int: u32, //Intelligence
    wis: u32, //Wisdom
    cha: u32, //Charisma
    str_modifier: u32,
    dex_modifier: u32,
    con_modifier: u32,
    int_modifier: u32,
    wis_modifier: u32,
    cha_modifier: u32
}

struct Stats {
    #[key]
    player: ContractAddress,
    #[key]
    quest_id: u32,
    #[key]
    entity_id: u32,
    ac: u32, // Armor Class
    damage_dice: u32,
    hp: u32 // Hit Points
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Position {
    #[key]
    player: ContractAddress,
    #[key]
    quest_id: u32,
    #[key]
    entity_id: u32,
    x: u32,
    y: u32
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Counter {
    #[key]
    player: ContractAddress,
    #[key]
    quest_id: u32,
    goblin_count: u32,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Quest {
    #[key]
    player: ContractAddress,
    quest_id: u32,
    // 0 = not started, 1 = started, 2 = completed
    quest_state: u32,
}

trait PositionTrait {
    fn is_zero(self: Position) -> bool;
    fn is_equal(self: Position, b: Position) -> bool;
    fn is_neighbor(self: Position, b: Option<(x: u32, y: u32)>) -> bool;
    fn move_steps(self: Position, b: Option<(x: u32, y: u32)>) -> u32;
    fn neighbors(self: Position, grid_width: u32, grid_height: u32) -> (u32, u32));
}

impl PositionImpl of PositionTrait {
    fn is_zero(self: Position) -> bool {
        if self.x - self.y == 0 {
            return true;
        }
        false
    }

    fn is_equal(self: Position, b: Position) -> bool {
        self.x == b.x && self.y == b.y
    }

    fn is_neighbor(self: Position, b: Option<(x: u32, y: u32)>) -> bool {
        let mut near = false;
        let (x, y) = b.unwrap();
        if self.x == x {
            if self.y == y + 1 {
                near = true;
            }
            if y > 0 && self.y == y - 1 {
                near = true;
            }
        } else if self.y == y {
            if self.x == x + 1 {
                near = true;
            }
            if x > 0 && self.x == x - 1 {
                near = true;
            }
        }

        near
    }

    fn move_steps(self: Position, b: Option<(x: u32, y: u32)>) -> u32 {
        let (x, y) = b.unwrap();
        let steps_x = {
            if self.x > x {
                self.x - x
            } else if self.x > x {
                x - self.x
            } else {
                0
            }
        };
        let steps_y = {
            if self.y > y {
                self.y - y
            } else if self.y > y {
                y - self.y
            } else {
                0
            }
        };
        let steps = steps_x + steps_y;

        steps
    }

    fn neighbors(self: Position, grid_width: usize, grid_height: usize) -> ArrayTrait<(u32, u32)> {
        let mut neighbors = ArrayTrait::new();
        
        if self.x > 0 {
            neighbors.append((self.x - 1, self.y));
        }
        if self.x < grid_width - 1 {
            neighbors.append((self.x + 1, self.y));
        }
        if self.y > 0 {
            neighbors.append((self.x, self.y - 1));
        }
        if self.y < grid_height - 1 {
            neighbors.append((self.x, self.y + 1));
        }
        
        neighbors
    }
}

#[cfg(test)]
mod tests {
    use debug::PrintTrait;
    use super::{Position, PositionTrait};

    #[test]
    #[available_gas(100000)]
    fn test_position_is_zero() {
        let player = starknet::contract_address_const::<0x0>();
        assert(PositionTrait::is_zero(Position { player, x: 0, y: 0 }), 'not zero');
    }

    #[test]
    #[available_gas(100000)]
    fn test_position_is_equal() {
        let player = starknet::contract_address_const::<0x0>();
        let position = Position { player, x: 420, y: 0 };
        position.print();
        assert(PositionTrait::is_equal(position, Position { player, x: 420, y: 0 }), 'not equal');
    }
}
