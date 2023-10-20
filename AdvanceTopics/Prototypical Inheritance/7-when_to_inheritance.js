// When to ue Inheritance

// While inheritance is a great tool for solving the problem of code reuse.
// Cuatious when using it, cause it can make your code complex and fragile.
// don't use Inheritance for the sake of using inheritance, espacially in small projects.

// KEEP IT SIMPLE ! and STUPID.
// Start with simple object and if you see number of ehse object share similar feature,
// then you can encapsulate these features inside a generic object, then use Inheritance.

// Remember inheritance is not the only solution to enable code reuse.
// There's another technique called COMPOSITON.

// Problem with Inheritance
// Here is an Animal object
// with two methods eat() and walk()
// Animal -> eat(), walk()
// two objects that we derive from Animal -> Person(), Dog()
//  Animal -> Person={}, and Dog={},
// tomorrow we might introduce another object called Goldfish={} to Animal object.

// Note our hierarchy is broken, Why Goldfish cannot walk.

// to solve this problem
// our hierarchy should have

// Animal with -> eat() method

// Animal -> two objects Mammal and Fish
// Mammal -> Person and Dog
// Fish -> Goldfish
/**   
     *              *******************************
                    # Animal: Super/Parent object #
              ----->#    Methos: eat();           #<-----
              |      ******************************     |
              |                                         |
            **********                              ********
         -->* Mammal *<----                         * Fish *
         |  *********     |                         ********
         | Walk() method  |                         swim() method
         |                |                             |
     **********        *******                      ************
     * Person *        * Dog *                      * Goldfish *
    **********         *******                      ************
    // whay would happen if we have more different animals.
    // it would mean that we should now look for a place to place a new animal

    // Avoid creating inheritance hierarchy, as they are very fragile.
    
    // NB: If you want to use inheritance keep it one level, do not go more than one level

    // NB: Favor CMPOSITION over INHERITANCE. 
    */

// Using Composition
// we can define various features as indepedent objects
// like this: three objects => plain javascript objects
// with certain properties and methods

//   canEat()       canWalk()      canSwim()

// We compose PERSON/Dog object that -> canEat and canWalk
// We compose GOLDFISH object that -> canSwim

// to achieve composition we use Mixins.
