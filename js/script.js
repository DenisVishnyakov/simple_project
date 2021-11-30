"use strict";

let numberOfFilms;
Start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function Start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    } while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

function rememberMyFilms() {
    for(let i = 0; i<2; i++) {
        const a = prompt("Один из ваших просмотренных фильмов?"),
              b = prompt("Какую оценку поставите?");
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
        } else {
            i--;
        }
        
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }
}

function showMyDB(hidden) {
    if(hidden == false) {
        console.log(personalMovieDB);
        console.dir(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let quest;
        do {
            quest = prompt(`Ваш любимый жанр (№${i+1})`);
        } while(quest == null || quest == '');
        personalMovieDB.genres[i] = quest;
    }
}