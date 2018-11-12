const app = angular.module('MyPortfolio', [])

app.controller('PortfolioController', function(){
    this.pagePath = "partials/home.html";

    this.footerPartial = 'partials/footer.html';

    this.changePage = (path) => {
        this.pagePath = `partials/${path}.html`;
    }
})
