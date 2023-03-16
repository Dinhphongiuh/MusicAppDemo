const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const playlist = $('.playlist');

const app = 
{
    songs: [
        {
            name: 'Without Me',
            singer: 'Halsey ',
            path: '../music/whithout-me.mp3',
            image: '../img/whithout\ Me.jpg'
        }
    ],
    render: function()
    {
        const htmls = this.songs.map(song => 
        {
            return `
                <div class="song">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
    },
    start: function()
    {
        this.render();
    }
}

app.start();