class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        if (this.isCheckedOut === true) {
            this.isCheckedOut = false;
        } else if (this.isCheckedOut === false) {
            this.isCheckedOut = true;
        }
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);          
        return ratingsSum / this.ratings.length;
    }

    addRating(newRating) {
        if (newRating > 5 || newRating < 1) {
            console.log('Rating must be between 1 and 5.');
        } else {
        this.ratings.push(newRating);
        }
    } 
}  

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }  
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}
  
class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._artist = artist;
        this._songs = [];
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    addsongs(song) {
        this.songs.push(song);
    }

    shuffle() {
       let songArray = this.songs;
       for (let i = songArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songArray[i], songArray[j]] = [songArray[j], songArray[i]];
       } 
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const myCD = new CD('Parkway Drive', 'Deep Blue')
myCD.addsongs('Deliver Me');
myCD.addsongs('Karma');
myCD.addsongs('Set to Destroy');
myCD.addsongs('Unrest');
myCD.shuffle();
console.log(myCD.songs);