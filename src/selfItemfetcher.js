import React from 'react';
import image1 from './temp/p3.jpg'
import image2 from './temp/p1.jpg'
import image3 from './temp/p2.jpg'

class Music{
    constructor(MusicName, AlbumName, MusicPoster){
        this.MusicName = MusicName;
        this.AlbumName = AlbumName;
        this.MusicPoster = MusicPoster;
    }
}
function shelfItems(shelfname) {
    var Music1 = new Music("Farishte", "Udhamm", image1);
    var Music2 = new Music("Dard Dilon ke", "Xpose", image2);
    var Music3 = new Music("Menu Keh lende", "Himesh Reshmiyaan", image3);

    const RecentlyPlayed = [Music1, Music2, Music3];
    const Artist = [Music2, Music3, Music1, Music2, Music3, Music1, Music2, Music3, Music1];

    if(shelfname === "Recently Played") return RecentlyPlayed;
    else if(shelfname === "Javed Ali") return Artist;
    else if(shelfname === "More for you") return Artist;
    return [];
}

export default shelfItems;