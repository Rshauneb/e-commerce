'use strict'

class PageController {
  about({ view }){
    return view.render
    ('layouts/pages/about');
  }

  home({ view }){
    return view.render
    ('layouts/pages/home');
  }
}


module.exports = PageController
