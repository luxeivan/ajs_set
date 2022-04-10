export default class Team{
    constructor(){
        this.members = new Set();
    }
    add(character){
        if(!this.members.has(character)){
            this.members.add(character)
        }else{
            throw new Error('Этот персонаж уже существует');
        }
    }
    addAll(characters){
        characters.forEach(character => {
            this.members.add(character);
        });
    }
    toArray(){
        const arr =[];
        this.members.forEach(element=>{
            arr.push(element);
        })
        return arr;
    }
}