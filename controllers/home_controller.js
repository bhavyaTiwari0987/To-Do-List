module.exports.home = function (req, res) {
                    // return res.end('<h1>home controller is working</h1>');        
                    return res.render('home', {
                                        title: 'home'
                    })
};
