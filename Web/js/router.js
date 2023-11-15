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
        case '#Under_Construction':
            R.Under_Construction()
            break
        default:
            R.index()
            break
    }
}
window.onload = function () {
    // hash(#後面的)有任何改變就會觸發
    window.onhashchange()
}