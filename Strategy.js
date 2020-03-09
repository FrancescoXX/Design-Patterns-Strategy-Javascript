/**
 * STRATEGY PATTERN JAVASCRIPT IMPLEMENTATION
 */

//Concrete Strategy A
class AggressiveStrategy {
	constructor() {
		this.next = move => "Next aggressive move";
	}
}

//Concrete Strategy B
class BalancedStrategy {
	constructor() {
		this.next = move => "Next balanced move";
	}
}

//Concrete Strategy C
class DefensiveStrategy {
	constructor() {
		this.next = move => "Next defensive move";
	}
}

//Strategy
class AIGameStrategy {
	constructor() {
		this.setStrategy = (game) => this.game = game;
		this.next = move => this.game.next(move);
	}
}

// --- MAIN ---

//Strategies initialization
const aggressive = new AggressiveStrategy();
const balanced = new BalancedStrategy();
const defensive = new DefensiveStrategy();

//Implement Strategy Pattern
const AI = new AIGameStrategy();

//Set Defensive Strategy
AI.setStrategy(defensive);

//Perform defensive action
console.log(AI.next()); //Next defensive move

//Set Balanced Strategy...
AI.setStrategy(balanced);

//Perform balanced actions
console.log(AI.next()); //Next balanced move
console.log(AI.next()); //Next balanced move
console.log(AI.next()); //Next balanced move

//Change Strategy to Aggressive
AI.setStrategy(aggressive);

//Perform aggressive actions
console.log(AI.next()); //Next aggressive move
console.log(AI.next()); //Next aggressive move