

class RandomGenerator{
    // si poteva fare piu semplice? si
    maxvalue(n) {
        const maxValueBin = n.toString(2) //tranformiamo numero in binary
        const bitLenght = maxValueBin.length // trovaimo quanti bit il numero occupa
        const seed = (new Date().getMilliseconds() + 50);// millesecondi da usare come base per generare una stringa magiore
        const bin = Math.pow(seed , (new Date().getSeconds()+1))  .toString(2).slice(3, (bitLenght+3));//magic 
        const number = parseInt(bin, 2)// binario a numero hex
    
        console.log(bin > maxValueBin ? number >> 1 : number)// control 
    }

}

const random = new RandomGenerator  ()

   

random.maxvalue(4)

