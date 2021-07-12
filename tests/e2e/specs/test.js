// https://docs.cypress.io/api/introduction/api.html

describe('e2e functional tests.', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('.page-title', 'Article list');
  });

  it('Create and edit and delete article', () => {
    cy.visit('/');
    const title = 'title';
    const description = 'description';
    const edited = ' EDIT';
    const mockPostCount = 6;
    cy.get('body > #app > .nav > .main-links > .nav-item:nth-child(3)').click();

    cy.get(
      '.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-textarea > .el-textarea__inner'
    ).type(title);

    cy.get(
      '.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-textarea > .el-textarea__inner'
    ).type(description);

    cy.get(
      '.form-container > .el-form > .el-form-item > .el-form-item__content > .el-button'
    ).click();

    cy.get('body > #app > .nav > div > .nav-text').click();

    cy.get(
      '.card-container > a:nth-child(1) > .el-card > .el-card__body > .image'
    ).click();

    cy.get('.blog > .page-title').contains(`Article ${mockPostCount + 1}`);
    cy.get('.article-title').contains(title);
    cy.get('.article-description').contains(description);

    cy.get('body > #app > .nav > div > .nav-text').click();

    cy.get('body > #app > .nav > .main-links > .nav-item:nth-child(2)').click();

    cy.get(
      '.el-card:nth-child(1) > .el-card__body > .overlay > .el-button--primary > span'
    ).click();

    cy.get(
      '.el-form > .el-form-item:nth-child(1) > .el-form-item__content > .el-textarea > .el-textarea__inner'
    ).type(edited);

    cy.get(
      '.el-form > .el-form-item:nth-child(2) > .el-form-item__content > .el-textarea > .el-textarea__inner'
    ).type(edited);

    cy.get(
      '.form-container > .el-form > .el-form-item > .el-form-item__content > .el-button'
    ).click();

    cy.get('body > #app > .nav > div > .nav-text').click();

    cy.get(
      '.card-container > a:nth-child(1) > .el-card > .el-card__body > .image'
    ).click();

    cy.get('.blog > .page-title').should(
      'have.text',
      `Article ${mockPostCount + 1}`
    );
    cy.get('.article-title').should('have.text', title + edited);
    cy.get('.article-description').should('have.text', description + edited);

    cy.get('body > #app > .nav > .main-links > .nav-item:nth-child(2)').click();

    cy.get(
      '.el-card:nth-child(1) > .el-card__body > .overlay > .el-button--danger > span'
    ).click();
    cy.wait(500)
      cy.get(
          '.el-card__body'
      ).its('length').should('eq', 6)
  });
});
