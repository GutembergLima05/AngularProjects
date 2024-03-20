//classes
class Character {
    public name: string
    private stregth: number;
    protected skill: number;
 
     constructor(name: string, stregth: number, skill: number){
         this.name = name;
         this.skill = skill;
         this.stregth = stregth;
     }
 
     attack(): void{
         console.log(`Attack with ${this.stregth} points`);
     }
 }
 
 //Subclass
 class Magician extends Character{
 
     magicPoints: number;
 
     constructor(name: string, stregth: number, skill: number, magicPoints: number){
         super(name, stregth, skill);
         this.magicPoints = magicPoints;
     }
 }
 
 const p1 = new Character('guto', 1, 10);
 const p2 = new Magician('Mago', 9 , 30, 100);
 p1.attack();
 p2.attack();
 