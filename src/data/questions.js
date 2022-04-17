import { v4 as uuid } from 'uuid'
import g1 from 'assets/1.jpg'
import g2 from 'assets/2.jpg'
import g3 from 'assets/3.jpg'
import g4 from 'assets/4.jpg'
import g5 from 'assets/5.jpg'

export const questions = [
    {
        id: uuid(),
        category: 'guess',
        question: 'what shoe is this?',
        options: ['jordan 1 retro chicago', 'jordan 4 cactus jacks', 'jordan 11 concord', 'jordan 1 retro shadow'],
        answer: 'jordan 1 retro chicago',
        img: `${g1}`

    },
    {
        id: uuid(),
        category: 'guess',
        question: 'what shoe is this?',
        options: ['jordan 4 sky', 'jordan 4 cactus jacks', 'jordan 11 fly', 'nike air max'],
        answer: 'jordan 4 cactus jack',
        img: `${g2}`
    },
    {
        id: uuid(),
        category: 'guess',
        question: 'what shoe is this?',
        options: ['jordan 11 concord', 'jordan 11 spacejam', 'jordan 8 love', 'michael jordan 11'],
        answer: 'jordan 11 concord',
        img: `${g3}`
    },
    {
        id: uuid(),
        category: 'guess',
        question: 'what shoe is this?',
        options: ['jordan 11 spacejam', 'jordan 9 retro', 'jordan 4 cactus jack', 'jordan 1 retro'],
        answer: 'jordan 11 spacejam',
        img: `${g4}`
    },
    {
        id: uuid(),
        category: 'guess',
        question: 'what shoe is this?',
        options: ['jordan 4 cool grey', 'jordan 11 concord', 'jordan 4 wolf grey', 'jordan 14 light'],
        answer: 'jordan 4 cool grey',
        img: `${g5}`
    },
    {
        id: uuid(),
        category: 'hiphop',
        question: 'Which famous rapper collaborated with Nike, and then Adidas, to create Yeezy?',
        options: ['jay z', 'kanye west', 'drake', 'future',],
        answer: 'kanye west',
    },
    {
        id: uuid(),
        category: 'hiphop',
        question: 'Which of these artists has also collaborated with Adidas?',
        options: ['kendrick lamar', 'rihanna', 'pharrell williams', 'eminem',],
        answer: 'pharrell williams',
    },
    {
        id: uuid(),
        category: 'hiphop',
        question: 'Which rap group was responsible for putting the Adidas Superstars on the map?',
        options: ['wu-tang clan', 'run d.m.c', 'n.w.a', 'bell biv devoe',],
        answer: 'run d.m.c',
    },
    {
        id: uuid(),
        category: 'hiphop',
        question: 'Who is the founder and creator of the Off-White?',
        options: ['virgil abloh', 'ronnie fieg', 'oliver rousteing', 'joe la puma',],
        answer: 'virgil abloh',
    },
    {
        id: uuid(),
        category: 'nba',
        question: 'Which of these basketball players does NOT have a sneaker?',
        options: ['lebron james', 'james harden', 'kyrie irving', 'daymond green',],
        answer: 'daymond green',
    },
    {
        id: uuid(),
        category: 'nba',
        question: 'When was the Air Jordan line of shoes released?',
        options: ['1985', '1987', '1981', '1977',],
        answer: '1985',
    },
    {
        id: uuid(),
        category: 'nba',
        question: 'Which of the following statements about the Air Jordan 2 is NOT true?',
        options: ['designed by michael himself', 'originally manufactured in ita;y', 'first nike to not feature the swoosh'],
        answer: 'designed by michael himself',
    },
    {
        id: uuid(),
        category: 'nba',
        question: 'Which famous Nike designer started his personal legacy with Jordan Brand by creating the Air Jordan 3?',
        options: ['peter moore', 'tinker hatfield', 'mark parker'],
        answer: 'tinker hatfield',
    },
    {
        id: uuid(),
        category: 'nba',
        question: 'An all-time classic Air Jordan 5 colorways is called “Laney”. It’s inspired by and named after Michael Jordan’s…?',
        options: ['high school', 'college', 'first girlfriend'],
        answer: 'high school',
    },

]