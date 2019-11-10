describe('Sapper chat app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Chat App')
	});

	it('has chat input field with placeholder', () => {
		cy.get('input').invoke('attr', 'placeholder').should('contain', 'Test')
	})

	it('Has "Send" button', () => {
		cy.get('button').contains('Send')
	});

	it('Posts chat message to the page', () => {
		cy.get('input').type('Let\'s post this test message')
		.then(()=> cy.get('button').contains('Send').click())
		.then(() => cy.get('li').contains('Let\'s post this test message'))	
	})
});
