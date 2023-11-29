window.onhashchange = async function () {
    // #後面的東西(包含)     // window.location.ref: 全部的url
    var tokens = window.location.hash.split('/')
    console.log("@@@@@@")
    console.log('tokens=', tokens)
    switch (tokens[0]) {
        case '#':
            R.index()
            break
        case '#Date':
            R.Date()
            break
        case '#introduction':
            R.introduction()
            break
        case '#Commit_Member':
            R.Commit_Member()
            break
        case '#Program':
            R.Program()
            break
        case '#signup':
            R.signupUi()
            break
        case '#Special_section':
            R.Special_section()
            break
        case '#nstc':
            R.nstc()
            break
        case '#submit_info':
            R.submit_info()
            break
        case '#signup':
            R.signup()
            break
        case '#traffic_stay':
            R.traffic_stay()
            break
        case '#Sponsor':
            R.Sponsor()
            break
        case '#contact':
            R.contact()
            break
        case '#venue':
            R.venue()
            break
        case '#Under_Construction':
            R.Under_Construction()
            break
        default:
            R.index()
            break
    }
    var animated_wrappers = document.querySelectorAll('.animated-wrapper');
    for(var i = 0; i < animated_wrappers.length; i++){
        my_observer.observe(animated_wrappers[i]);
    }
}
window.onload = function () {
    // hash(#後面的)有任何改變就會觸發
    window.onhashchange()
}

const my_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const animated_item = entry.target.querySelector('.animated-item');

      if (entry.isIntersecting) {
        // square.classList.add(['animated', 'fadeInUp']);
        // square.classList.add(['animated', 'fadeInUp']);
        animated_item.classList.add('animated');
        animated_item.classList.add('fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
    //   animated_item.classList.remove('animated');
    //   animated_item.classList.remove('fadeInUp');
    });
  });

