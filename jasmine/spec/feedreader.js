/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have defined non-empty URLs', function() {
              //to loop around all feeds.
              allFeeds.forEach(function(feed){
              //test that url is defined
              expect(feed.url).toBeDefined();
              //test that url is non-empty
              expect(feed.url.length).not.toBe(0);
            });
          });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have defined non-empty names', function() {
              //used a function then called a forEach loop for it, to avoid string errors
              function nameTesting(feed) {
                //test that name is defined
                expect(feed.name).toBeDefined();
                //test that name is non-empty
                expect(feed.name).not.toBe('');
              }
              allFeeds.forEach(nameTesting);
          });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
           //test that visibility is set to 'visible'
           expect($('.menu-hidden').is(':visible')).toBe(true);
          });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes visibility property when menu icon is clicked', function() {
              //test that it shows when clicked
              $('.menu-icon-link').click();
              expect($('.menu-hidden').is(':visible')).toBe(false);
              //test that it hides when clicked
              $('.menu-icon-link').click();
              expect($('.menu-hidden').is(':visible')).toBe(true);
          });
      });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(0, done);
            });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('contains at least a single entry within feed', function() {
             expect($('.feed .entry').length).toBeGreaterThan(0);
         });
     });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      //old and update feed variables
      var feed, updatedFeed;
      //start loading feeds and checking their contents
      beforeEach(function(done) {
          //declare old feed and store it
          loadFeed(0, function() {
              feed = $('.feed');
              //declare updated feed
              loadFeed(1, function() {
                  updatedFeed = $('.feed');
                  done();
              });
          });
      });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('changes content when new feed is loaded', function() {
           //test that feed is updated and content is changed byt comparing feeds
            expect(feed).not.toBe(updatedFeed);
        });
    });
}());
