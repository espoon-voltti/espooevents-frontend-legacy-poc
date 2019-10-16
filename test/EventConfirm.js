import {Selector} from 'testcafe'

fixture`Try to search for the event, expects a sample entry`
    .page`https://linkedevents.hel.fi/search`

test('Try searching for the event', async t => {
    await t
        .expect(
            Selector('.Select-menu-outer')
                .child(0)
                .child(0).innerText
        )
        .contains('Sellon kirjasto')
        .typeText(Selector('.form-control'), 'Esimerkkiotsikko')
        .click(Selector('.mui-raised-button'))
        .expect(Selector('.name').nth(0).innerText, 'Esimerkkiotsikko')
})
