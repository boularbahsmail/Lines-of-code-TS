class Conference {
    name: string // Parameter type : string

    // Conference name constructor
    constructor(ConferenceName: string) { // Conference name parameter type : string
        this.name = ConferenceName;
    }

    welcome(country: string) { // Country parameter type : string
        console.log(`Hello ${this.name}. It's great to be in ${country}`);
    }
}

// Current Conference Name
let CurrentConference = new Conference("GeeksBlaBla");
// Set location of the conference | welcome() -> Morocco
CurrentConference.welcome('Morocco');

class Geeks_BlaBla extends Conference {
    constructor(ConferenceName: string) { // Conference name parameter type : string
        super(ConferenceName);
    }

    welcome(country: string) {
        console.log(`Hi ${this.name} from the derived class. It's great to be in ${country}`);
    }
}
