class why {
    constructor() {
        this.possibleAnswer = [["i don't", "to"],
        ["create", "equalize", "avoid"],
        ["suffer", "gravitational", "existence"],
        ["of the planet", "of pain", "of your self"]];
        this.answer = []
    }

    Askme() {
        this.possibleAnswer.forEach((element, index) => {
            if (index == 0) {
                this.answer.push(element[Math.floor(Math.random() * 2)])
            } else {
                this.answer.push(element[Math.floor(Math.random() *3)])
            }
        });

        this.answer.toString
    }
}

export const whyInstance = new why()