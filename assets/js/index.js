//Api Data
let data = '../../data/siswa/data.json';
let tampilSiswa = document.querySelector('.row');

const tampilData = () => {
    fetch(data)
    .then(function (response) {
        return response.json()
    })
    .then(function (getData) {
        let siswa = ''
        for (let dataSiswa of getData) {
            siswa += `
                <div class="col s12 m4 l4">
                    <div class="card" style="box-shadow: 0 5px 20px rgba(0,0,0,0.2); border: 1px solid rgba(0,0,0,0.5); margin-bottom: 2rem;">
                        <div class="card-image">
                            <img src="${dataSiswa.avatar}">
                        </div>
                            <div class="card-content" style="line-height: 0;">
                                <span class="card-title black-text"style="font-size: 15px; font-weight: 600;">${dataSiswa.nama}</span>
                                <font style="font-size: 15px; font-weight: 500;">Gender:&nbsp;</font><font style="font-size: 15px; font-weight: 400;">${dataSiswa.jeniskelamin}
                            </div>
                        <div class="card-action center-align" style="box-shadow: 0 -5px 20px rgba(0,0,0,0.1);">
                            <a href="${dataSiswa.contact}" class="light-blue-text accent-1">Contact</a>
                        </div>
                    </div>
                </div>
            `;
        }
        tampilSiswa.innerHTML = siswa;
    })
    .catch(e => console.log(e))
}
tampilData()

//ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 300,
    reset: true,
    desktop: true,
    mobile: true,
    rotate: {
        x: 0,
        y: 0,
        z: 0
    }
});
sr.reveal('.img3', {rotate:{y: 500}})
sr.reveal('.img2', {delay: 700, rotate:{y: -500}})
sr.reveal('.img1', {delay: 700, rotate:{x: 500}})
