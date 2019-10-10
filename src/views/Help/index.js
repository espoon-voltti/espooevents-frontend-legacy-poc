import './index.scss'

import React from 'react'

const EventsHelp = () => {
    return (
        <div className="container help-page">
            <div id="short">
                <h1>Espoo Events lyhyesti</h1>
                <ul>
                    <li>Tapahtumatiedot näkyvät useissa eri sovelluksissa – myös muissa kuin kaupungin omissa.</li>
                    <li>Tapahtumia saa syöttää kaupungin luvalla. Niiden ei tarvitse olla kaupungin järjestämiä.</li>
                    <li>Tapahtumalle voi antaa useita päivämääriä. Tapahtumasarjalle luodaan automaattisesti ylätapahtuma.</li>
                    <li>Tapahtumia voi myös kopioida, perua ja poistaa.</li>
                    <li>Huolella syötetyt tiedot helpottavat tapahtuman löytämistä:</li>
                    <ul>
                        <li>Eri yhteyksissä ymmärrettävät otsikko, lyhyt kuvaus ja kuvaus.</li>
                        <li>Lyhyt kuvaus näytetään vain listoissa, kuvaus taas tapahtuman omalla sivulla.</li>
                        <li>Jos kohderyhmä on rajattu, kerro siitä kuvauskentässä.</li>
                        <li>Verkkoon sopivaksi muokattu 3:2-vaakakuva, esim. 1200px X 800px.</li>
                        <li>Ylätasoinen asiasanoitus ja luokittelu. Käytä aina joitain suosittuja asiasanoja.</li>
                    </ul>
                </ul>

                <p>Kaupungin tapahtumakalenteri: <a href="http://www.hel.fi/tapahtumat" rel='noopener noreferrer' target="_blank">hel.fi/tapahtumat</a>.</p>
                <p>Espoo Events -rajapinta: <a href="http://api.hel.fi/linkedevents" rel='noopener noreferrer' target="_blank">api.hel.fi/linkedevents</a>.</p>
                <p>Rajapinnan kehittäjäsivu: <a href="https://dev.hel.fi/projects/linked-events/" rel='noopener noreferrer' target="_blank">dev.hel.fi/projects/linked-events</a><br/></p>

                <p>Rajapinnan palvelupäällikkö on Aleksi Salonen (@hel.fi) ja tekninen kehityspäällikkö Riku Oja (@hel.fi).</p>
            </div>

            <hr/>

            <div id="long">
                <h1>Espoo Events -tapahtumarajapinnan syöttökäyttöliittymä</h1>

                <h2>A. Yleistä</h2>

                <p>1. <strong>Espoo Events on Espoon kaupungin tapahtumarajapinta.</strong> Rajapintaan syötetyt tapahtumat siirtyvät automaattisesti kaupungin tapahtumakalenteriin, palvelukartalle ja myös muihin kuin kaupungin ylläpitämiin kalenterisovelluksiin. Tapahtuman kuvaus kannattaa siksi laatia helposti ymmärrettäväksi eri käyttöpaikoissa.</p>

                <p>2. <strong>Rajapinnan syöttökäyttöliittymä</strong> löytyy osoitteesta linkedevents.hel.fi. Käyttöoikeuden saa kirjautumalla ensin palveluun ja lähettämällä tämän jälkeen oikeuksien vahvistuspyynnön. Syöttöliittymää voi käyttää mistä vain ja myös mobiililaitteilla. Muokkausoikeus on oman organisaation tapahtumille.</p>

                <p>3. <strong>Rajapintaan saa syöttää tapahtumia</strong> Helsingin kaupungin luvalla. Tapahtumien ei tarvitse olla kaikille avoimia, mutta rajoitukset on kerrottava selkeästi tapahtuman kuvauksessa.</p>

                <p>4. <strong>Käyttöliittymässä voi</strong> a) hakea kaikista kaupungin tapahtumista, b) selata ja muokata oman organisaation tapahtumia ja c) lisätä uusia tapahtumia. Toistuvan tapahtuman kaikki päivät voi lisätä samalla kertaa.</p>

                <h2>B. Tapahtuman syöttö</h2>

                <p>5. <strong>Lisää uusi tapahtuma:</strong> Tapahtuman tiedot on syötettävä ainakin suomeksi. Ruotsin- ja englanninkieliset tiedot on syytä täyttää suurissa ja kielikohderyhmille sopivissa tapahtumissa.</p>

                <p>5.1 <strong>Täytä tiedot niin laajasti ja tarkasti kuin mahdollista.</strong> Lomakkeen ohjetekstit avustavat täyttämisessä.</p>

                <p>5.2 <strong>Pyri aina löytämään tapahtumalle kuva.</strong> Kuvalle voi merkitä käyttöoikeuden CC 4.0 BY (<a href="https://creativecommons.org/licenses/by/4.0/" rel='noopener noreferrer' target="_blank">ks. selitys</a>) tai {`"käyttö vain tapahtuman yhteydessä"`}. Joitakin vapaasti käytettäviä kuvituskuvia löytyy osoitteesta <a href="http://www.hel.fi/tapahtumakuvat" rel='noopener noreferrer' target="_blank">hel.fi/tapahtumakuvat</a>.</p>

                <p><strong>Muokkaa kuva ennen syöttöä verkkoon sopivaksi</strong> ja 3:2-vaakakuvasuhteeseen, esim. 1200X800px. Olennaista on, että tiedostokoko pysyy kohtuullisena myös mobiilikäyttöön eli mieluiten alle 200 kilotavun (kt).</p>

                <p>5.3 <strong>Useana päivänä toistuvan tapahtuman</strong> lisäämiseksi on Lisää uusi ajankohta -nappi ja säännöllisesti toistuvalle tapahtumalle oma Toistuva tapahtuma -työkalu.</p>

                <p>5.4 <strong>Tapahtuman paikka</strong> valitaan kaupungin toimipisterekisterin paikoista. Osoite- ja muut tiedot haetaan siis automaattisesti, kun oikea paikka löytyy. Jos haluat lisätä uuden toimipisteen, ota yhteyttä <a href="mailto:aleksi.salonen@hel.fi">aleksi.salonen@hel.fi</a>.</p>

                <p>5.5 <strong>Tapahtuman luokittelu asiasanoilla on tärkeää</strong>, jotta eri sovellusten käyttäjät löytävät tapahtuman suuresta tapahtumamassasta. Valitse useampi asiasana ja suosi niitä, joita on käytetty useissa tapahtumissa. Asiasanat (<a href="https://finto.fi/yso/fi/" rel='noopener noreferrer' target="_blank">ks. YSO-sanasto</a>) löytyvät useimmiten monikkomuodossa, esim. kirjat, perheet, näytelmät ja maalaukset.</p>

                <p>5.6 <strong>Pääkategoriat ja kohderyhmät</strong> ovat ensijaisesti hel.fi-sivustoa varten, mutta ne näkyvät myös muille rajapinnan hyödyntäjille.</p>

                <p>5.7 <strong>Jos tapahtumalla on useita päivämääräkertoja, voi tallentamisessa kestää hetken.</strong> Jos et saa Julkaise tapahtuma -napin painamisen jälkeen virheilmoitusta, odota hetki, jolloin lomakkeen pitäisi siirtyä seuraavaan näkymään.</p>

                <h2>C. Muuta huomioitavaa</h2>

                <p>6. <strong>Virhetilanteissa</strong> voi lähettää raportin liittymän vasemmasta laidasta löytyvän ikonin kautta. Virheviestiä voi tehostaa lähettämällä sen erikseen myös osoitteeseen <a href="mailto:aleksi.salonen@hel.fi">aleksi.salonen@hel.fi</a>. Jälkimmäiseen osoitteeseen voi lisäksi lähettää parannusideoita käyttöliittymään tai kysyä neuvoa.</p>

                <p>7. <strong>Uuden tapahtuman tietojen pohjana voi käyttää vanhaa</strong>, avaamalla tapahtuman ja valitsemalla {`"Kopioi uuden tapahtuman pohjaksi"`}. Omat tapahtumat löytyvät helposti Tapahtumien hallinnasta ja niihin on muokkausoikeus.</p>
            </div>
        </div>
    )
}

const CoursesHelp = () => {
    return (
        <div className="container help-page">
            <div id="short">
                <h1>Linked Courses lyhyesti</h1>
                <ul>
                    <li>Kurssitiedot näkyvät useissa eri sovelluksissa – myös muissa kuin kaupungin omissa.</li>
                    <li>Kursseja saa syöttää kaupungin luvalla. Niiden ei tarvitse olla kaupungin järjestämiä.</li>
                    <li>Kursseille voi antaa useita päivämääriä. Tapahtumasarjalle luodaan automaattisesti ylätapahtuma.</li>
                    <li>Kursseja voi myös kopioida, perua ja poistaa.</li>
                    <li>Huolella syötetyt tiedot helpottavat kurssin löytämistä:</li>
                    <ul>
                        <li>Eri yhteyksissä ymmärrettävät otsikko, lyhyt kuvaus ja kuvaus.</li>
                        <li>Lyhyt kuvaus näytetään vain listoissa, kuvaus taas kurssin omalla sivulla.</li>
                        <li>Jos kohderyhmä on rajattu, kerro siitä kuvauskentässä.</li>
                        <li>Verkkoon sopivaksi muokattu 3:2-vaakakuva, esim. 1200px X 800px.</li>
                        <li>Ylätasoinen asiasanoitus ja luokittelu. Käytä aina joitain suosittuja asiasanoja.</li>
                    </ul>
                </ul>

                <p>Linked Courses -rajapinta: <a href="http://api.hel.fi/linkedcourses" rel='noopener noreferrer' target="_blank">api.hel.fi/linkedcourses</a>.</p>
                <p>Rajapinnan kehittäjäsivu: <a href="https://dev.hel.fi/projects/linked-courses/" rel='noopener noreferrer' target="_blank">dev.hel.fi/projects/linked-courses</a><br/></p>

            </div>

            <hr/>

            <div id="long">
                <h1>Linked Courses -kurssirajapinnan syöttökäyttöliittymä</h1>

                <h2>A. Yleistä</h2>

                <p>1. <strong>Linked Courses on Helsingin kaupungin kurssirajapinta.</strong></p>

                <p>2. <strong>Rajapinnan syöttökäyttöliittymä</strong> löytyy osoitteesta linkedcourses.hel.fi. Käyttöoikeuden saa kirjautumalla ensin palveluun ja lähettämällä tämän jälkeen oikeuksien vahvistuspyynnön. Syöttöliittymää voi käyttää mistä vain ja myös mobiililaitteilla. Muokkausoikeus on oman organisaation tapahtumille.</p>

                <p>3. <strong>Rajapintaan saa syöttää kursseja</strong></p>

                <p>4. <strong>Käyttöliittymässä voi</strong> a) hakea kaupungin kursseja, b) selata ja muokata oman organisaation kursseja ja c) lisätä uusia kursseja. Toistuvan kurssin kaikki päivät voi lisätä samalla kertaa.</p>

                <h2>B. Kurssin syöttö</h2>

                <p>5. <strong>Lisää uusi kurssi:</strong> Kurssin tiedot on syötettävä ainakin suomeksi. Ruotsin- ja englanninkieliset tiedot on syytä täyttää suurissa ja kielikohderyhmille sopivissa kursseissa.</p>

                <p>5.1 <strong>Täytä tiedot niin laajasti ja tarkasti kuin mahdollista.</strong> Lomakkeen ohjetekstit avustavat täyttämisessä.</p>

                <p>5.2 <strong>Pyri aina löytämään kurssille kuva.</strong> Kuvalle voi merkitä käyttöoikeuden CC 4.0 BY (<a href="https://creativecommons.org/licenses/by/4.0/" rel='noopener noreferrer' target="_blank">ks. selitys</a>) tai {`"käyttö vain tapahtuman yhteydessä"`}. Joitakin vapaasti käytettäviä kuvituskuvia löytyy osoitteesta <a href="http://www.hel.fi/tapahtumakuvat" rel='noopener noreferrer' target="_blank">hel.fi/tapahtumakuvat</a>.</p>

                <p><strong>Muokkaa kuva ennen syöttöä verkkoon sopivaksi</strong> ja 3:2-vaakakuvasuhteeseen, esim. 1200X800px. Olennaista on, että tiedostokoko pysyy kohtuullisena myös mobiilikäyttöön eli mieluiten alle 200 kilotavun (kt).</p>

                <p>5.3 <strong>Useana päivänä toistuvan kurssin</strong> lisäämiseksi on Lisää uusi kurssi -nappi ja säännöllisesti toistuvalle kurssille oma Toistuva kurssi -työkalu.</p>

                <p>5.4 <strong>Kurssin paikka</strong> valitaan kaupungin toimipisterekisterin paikoista. Osoite- ja muut tiedot haetaan siis automaattisesti, kun oikea paikka löytyy. Jos haluat lisätä uuden toimipisteen, ota yhteyttä <a href="mailto:juha.huhta@hel.fi">juha.huhta@hel.fi</a>.</p>

                <p>5.5 <strong>Kurssin luokittelu asiasanoilla on tärkeää</strong>, jotta eri sovellusten käyttäjät löytävät kurssin suuresta tapahtumamassasta. Valitse useampi asiasana ja suosi niitä, joita on käytetty useissa kursseissa. Asiasanat (<a href="https://finto.fi/yso/fi/" rel='noopener noreferrer' target="_blank">ks. YSO-sanasto</a>) löytyvät useimmiten monikkomuodossa, esim. kirjat, perheet, näytelmät ja maalaukset.</p>

                <p>5.6 <strong>Jos kurssilla on useita päivämääräkertoja, voi tallentamisessa kestää hetken.</strong> Jos et saa Julkaise kurssi -napin painamisen jälkeen virheilmoitusta, odota hetki, jolloin lomakkeen pitäisi siirtyä seuraavaan näkymään.</p>

                <h2>C. Muuta huomioitavaa</h2>

                <p>6. <strong>Virhetilanteissa</strong> voi lähettää raportin liittymän vasemmasta laidasta löytyvän ikonin kautta. Virheviestiä voi tehostaa lähettämällä sen erikseen myös osoitteeseen <a href="mailto:juha.huhta@hel.fi">juha.huhta@hel.fi</a>. Jälkimmäiseen osoitteeseen voi lisäksi lähettää parannusideoita käyttöliittymään tai kysyä neuvoa.</p>

                <p>7. <strong>Uuden kurssin tietojen pohjana voi käyttää vanhaa</strong>, avaamalla kurssin ja valitsemalla {`"Kopioi uuden kurssin pohjaksi"`}. Omat kurssit löytyvät helposti Kurssien hallinnasta ja niihin on muokkausoikeus.</p>
            </div>
        </div>
    )
}

const Help = appSettings.ui_mode === 'courses' ? CoursesHelp : EventsHelp
export default Help
