# Strategy Pattern 
### *Algorithm Encapsulation*
___

## Behavioral Design Pattern

## Intro

The Strategy pattern, also called policy pattern, enables selecting an algorithm at runtime.
Deferring the decision about which algorithm to use, allows more flexibility and reusability


## ⚡️Recognize

When we want to change the behavior of our application at runtime

For example, change the behavior to:

- aggressive
- defensive
- balanced

___

## 💡Intent

- Define different algorithms
- Make them interchangeable at runtime, with a setStrategy() method

___

## 🔧 Apply when

- Classes only change in behavior
- We want Different variants of an algorithm

___

## ✅Pro

- Algorithm families use inheritance  for common parts
Avoid conditional statements using this pattern
Clients can choose the required behavior

___

## ⚠️Cons

- Increased number of objects
- Strategies are shared between objects

___

## 🏆 Great for

- Encapsulate an algorithm
- Change algorithm at runtime

___
