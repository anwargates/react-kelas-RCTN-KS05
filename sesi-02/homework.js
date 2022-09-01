const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false },
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false },
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false },
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false },
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: true },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false },
        ]
    }
]

let videoDataFilter = videoData.filter((video) => video.present == true)
console.log(videoDataFilter)
let videoDataMap = videoData.map((video)=>console.log(video))

const dataFilter = videoDataFilter.map((data)=>{
    let name = data.name.toString()
    let present = data.present.toString()
    let rooms = data.rooms

    let room = {
        nama: name,
        present: present,
        rooms: rooms,
    }
    console.log(room)
})

// console.log(dataFilter)