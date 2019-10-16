import {Selector} from 'testcafe'

fixture`Getting Started`.page`https://linkedevents.hel.fi/event/create/new`

test('Type out and save an event', async t => {
    await t
        // .typeText('#apikey', process.env.ESPOOEVENTS_APIKEY)
        // .click('#login')

        // // Check if login was successful, start new event entry
        // .expect(Selector('.container').innerText).eql('Tapahtumien hallinta')
        // .click('.linked-events-bar__links__create-events')

        // Basic information
        .typeText(Selector('.hel-text-field').child(1), 'Esimerkkiotsikko')
        .typeText(
            Selector('.hel-text-field')
                .nth(1)
                .child(1),
            'Esimerkkikuvaus, lyhyt'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(2)
                .child(1),
            'Esimerkkikuvaus, pitkä'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(3)
                .child(1),
            'www.kotisivu.fi'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(4)
                .child(1),
            'Tapahtuman järjestäjä'
        )

        // Date picker
        .typeText(
            Selector('.hel-text-field')
                .nth(6)
                .child(0)
                .child(0),
            '01.01.2019'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(7)
                .child(1),
            '12:00'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(8)
                .child(0)
                .child(0),
            '02.01.2019'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(9)
                .child(1),
            '18:00'
        )

        // Premises
        .typeText(
            Selector('.hel-select')
                .child(1)
                .child(0)
                .child(0)
                .child(1)
                .child(0),
            'Sellon kirjasto',
            {
                timeout: 20000,
            }
        )
        .expect(
            Selector('.Select-menu-outer')
                .child(0)
                .child(0).innerText
        )
        .contains('Sellon kirjasto')
        // .click(Selector('.Select-menu-outer').child(0).child(0).innerText).contains('Sellon kirjasto')
        .wait(10000)
        .typeText(
            Selector('.hel-text-field')
                .nth(11)
                .child(1),
            'Paikan lisätiedot'
        )

        // Social media urls
        .typeText(
            Selector('.hel-text-field')
                .nth(12)
                .child(1),
            'www.facebook.com/tapahtuma'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(13)
                .child(1),
            'www.twitter.com/tapahtuma'
        )
        .typeText(
            Selector('.hel-text-field')
                .nth(14)
                .child(1),
            'www.instagram.com/tapahtuma'
        )

        // Classification
        .typeText(
            Selector('.hel-select')
                .nth(1)
                .child(1)
                .child(0)
                .child(0)
                .child(1)
                .child(0),
            'kulttuuritapahtumat',
            {
                timeout: 20000,
            }
        )
        .expect(
            Selector('.Select-menu-outer')
                .child(0)
                .child(0).innerText
        )
        .contains('kulttuuritapahtumat')
        .click(
            Selector('.Select-menu-outer')
                .child(0)
                .child(0)
        )

        // Categories 7
        .click(Selector('.hel-checkbox').nth(7))

        // Languages
        .click(Selector('.hel-checkbox').nth(27))
        .click(Selector('.hel-checkbox').nth(28))
        .click(Selector('.hel-checkbox').nth(29))

        // Publish
        .click(Selector('.jss50').nth(8))

    //
})
