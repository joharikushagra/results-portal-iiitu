(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    145: function (e, t, a) {},
    156: function (e, t, a) {
      e.exports = a.p + 'static/media/5269.76dabc64.jpg';
    },
    171: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABGklEQVRIie2UzWrCQBSFP83UxyjBR3AjFF37aK248R3qv32DUnySUoooiAhddD/d3EAyuXHGSXb1wtlM7j0f504S+O9lgKnIKM8/AAu814EkwEKMLPAGPDg9NqeoMsBGDH5EFthSTFYLlADzHKQP9IAL5WTRIAOsHUgq6lNOFgUywEqBfIk02M2gBJg5kEfgM2f0DXQprvEmUAgkBOaFLNHX5UIyaWu04lUJeQ1MEpJsjfJR14EEw5qABMHGDiTl+p34pN3ZpA38AntgBJyAnTTGVioeJ/E847yFviRPiukgIFmpfOuqKt8aAWg5A9eqVXEeNNf2NDVWd1AjoKOnd6CcDT0zqucL8X+DKj1roI7ADg0ADuLVycz/ANtP8QxehvU4AAAAAElFTkSuQmCC';
    },
    186: function (e, t, a) {
      e.exports = a(349);
    },
    208: function (e, t, a) {},
    209: function (e, t, a) {},
    327: function (e, t, a) {},
    328: function (e, t, a) {},
    349: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(24),
        c = a.n(r),
        o = a(41),
        s = a(55),
        m = a.n(s),
        i = Object(n.createContext)(),
        u = function (e) {
          var t = e.children,
            a = Object(n.useState)(!1),
            r = Object(o.a)(a, 2),
            c = r[0],
            s = r[1],
            u = localStorage.getItem('auth-token'),
            d = function (e) {
              m()({method: 'get', url: '/api/student/verifyToken', headers: {'x-auth-token': e}})
                .then(function (e) {
                  e.data.isAuthenticated ? s(!0) : s(!1);
                })
                .catch(function (e) {
                  s(!1);
                });
            };
          return (
            Object(n.useEffect)(
              function () {
                d(u);
                var e = setInterval(function () {
                  d(u);
                }, 6e5);
                return function () {
                  clearInterval(e);
                };
              },
              [u],
            ),
            l.a.createElement(i.Provider, {value: {isAuthenticated: c, setIsAuthenticated: s}}, t)
          );
        },
        d = (a(207), a(208), a(58)),
        E = a(32),
        g = a(350),
        p = a(351),
        f = a(69),
        h = (a(209), a(156)),
        b = a.n(h),
        A = a(59),
        x = a.n(A),
        v = a(357);
      var I = function () {
          var e = v.a.Title;
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              g.a,
              {className: 'row'},
              l.a.createElement(
                p.a,
                {className: 'first', xs: 24, sm: 24, md: 10, lg: 8, xl: 8},
                l.a.createElement('img', {id: 'logo', src: x.a, alt: 'IIIT UNA'}),
              ),
              l.a.createElement(
                p.a,
                {className: 'second', xs: 24, sm: 24, md: 14, lg: 16, xl: 16},
                l.a.createElement('img', {src: b.a, className: 'image', alt: 'Background'}),
                l.a.createElement(
                  e,
                  {className: 'text', style: {color: 'white'}, level: 2},
                  'Welcome to IIITU Result Portal',
                ),
                l.a.createElement('div', {className: 'overlay'}),
                l.a.createElement(
                  f.a,
                  {className: 'button', size: 'large', type: 'primary', href: '/login'},
                  'Know Your Result',
                ),
              ),
            ),
          );
        },
        N = (a(145), a(184)),
        y = a(356),
        O = a(360),
        j = a(362),
        S = a(363),
        w = function (e) {
          var t = Object(n.useContext)(i),
            a = v.a.Title;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              {className: 'login'},
              l.a.createElement(
                'div',
                {className: 'header'},
                l.a.createElement('img', {src: x.a, className: 'logoHead', alt: 'IIIT UNA'}),
                l.a.createElement(
                  a,
                  {level: 3, className: 'heading'},
                  'An Institute Of National Importance Under MHRD',
                ),
              ),
              l.a.createElement(
                y.a,
                {
                  name: 'normal_login',
                  className: 'login-form',
                  initialValues: {remember: !0},
                  onFinish: function (a) {
                    m.a
                      .post('/api/student/login/', {email: a.username, password: a.password})
                      .then(function (a) {
                        a.data.token &&
                          (localStorage.setItem('auth-token', a.data.token),
                          localStorage.setItem('student', JSON.stringify(a.data.student)),
                          t.setIsAuthenticated(!0),
                          e.history.replace('/result/prev'));
                      })
                      .catch(function (e) {
                        console.log(e),
                          N.a.error({
                            message: 'Authentication Failed',
                            description: 'INVALID CREDENTIALS',
                          });
                      });
                  },
                },
                l.a.createElement(
                  y.a.Item,
                  {
                    name: 'username',
                    rules: [{required: !0, message: 'Please input your Username!'}],
                  },
                  l.a.createElement(O.a, {
                    prefix: l.a.createElement(j.a, {className: 'site-form-item-icon'}),
                    placeholder: 'Institute Email',
                  }),
                ),
                l.a.createElement(
                  y.a.Item,
                  {
                    name: 'password',
                    rules: [{required: !0, message: 'Please input your Password!'}],
                  },
                  l.a.createElement(O.a, {
                    prefix: l.a.createElement(S.a, {className: 'site-form-item-icon'}),
                    type: 'password',
                    placeholder: 'Password',
                  }),
                ),
                l.a.createElement(
                  y.a.Item,
                  null,
                  l.a.createElement(
                    f.a,
                    {type: 'danger', htmlType: 'submit', className: 'login-form-button'},
                    'Log in',
                  ),
                ),
                l.a.createElement(
                  y.a.Item,
                  null,
                  l.a.createElement(
                    'a',
                    {
                      style: {color: 'white', float: 'left'},
                      className: 'login-form-forgot',
                      href: '/forgot',
                    },
                    'Forgot password?',
                  ),
                ),
              ),
            ),
          );
        },
        k = function () {
          var e = v.a.Title;
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              {className: 'login'},
              l.a.createElement(
                'div',
                {className: 'header'},
                l.a.createElement('img', {src: x.a, className: 'logoHead', alt: 'IIIT UNA'}),
                l.a.createElement(
                  e,
                  {level: 3, className: 'heading'},
                  'An Institute Of National Importance Under MHRD',
                ),
              ),
              l.a.createElement(
                y.a,
                {
                  name: 'normal_login',
                  className: 'login-form',
                  initialValues: {remember: !0},
                  onFinish: function (e) {
                    console.log('Received values of form: ', e);
                  },
                },
                l.a.createElement(
                  y.a.Item,
                  {
                    name: 'username',
                    rules: [{required: !0, message: 'Please input your Username!'}],
                  },
                  l.a.createElement(O.a, {
                    prefix: l.a.createElement(j.a, {className: 'site-form-item-icon'}),
                    placeholder: 'Institute Email',
                  }),
                ),
                l.a.createElement(
                  y.a.Item,
                  {
                    name: 'password',
                    rules: [{required: !0, message: 'Please input your Password!'}],
                  },
                  l.a.createElement(O.a, {
                    prefix: l.a.createElement(S.a, {className: 'site-form-item-icon'}),
                    type: 'password',
                    placeholder: 'Password',
                  }),
                ),
                l.a.createElement(
                  y.a.Item,
                  {
                    name: 'confirmpassword',
                    rules: [{required: !0, message: 'Confirm your password'}],
                  },
                  l.a.createElement(O.a, {
                    prefix: l.a.createElement(S.a, {className: 'site-form-item-icon'}),
                    type: 'password',
                    placeholder: 'Confirm Password',
                  }),
                ),
                l.a.createElement(
                  y.a.Item,
                  null,
                  l.a.createElement(
                    f.a,
                    {
                      type: 'danger',
                      href: '/login',
                      htmlType: 'submit',
                      className: 'login-form-button',
                    },
                    'Reset',
                  ),
                ),
              ),
            ),
          );
        },
        T = (a(327), a(352)),
        C = a(358);
      a(328);
      var U = function (e) {
          var t = Object(n.useState)({}),
            a = Object(o.a)(t, 2),
            r = a[0],
            c = a[1],
            s = Object(n.useState)({subjects: []}),
            i = Object(o.a)(s, 2),
            u = i[0],
            d = i[1],
            E = Object(n.useState)(!1),
            g = Object(o.a)(E, 2),
            p = g[0],
            f = g[1],
            h = Object(n.useState)(''),
            b = Object(o.a)(h, 2),
            A = b[0],
            x = b[1];
          Object(n.useEffect)(
            function () {
              var t = e.match.params,
                a = t.roll,
                n = t.sem,
                l = localStorage.getItem('auth-token'),
                r = JSON.parse(localStorage.getItem('student'));
              f(!0),
                m.a
                  .get('/api/student/'.concat(r.roll))
                  .then(function (e) {
                    c(e.data);
                  })
                  .catch(function (e) {
                    return console.log('unable to fetch student', e);
                  }),
                m()({
                  method: 'get',
                  url: '/api/result/'.concat(n, '/').concat(a),
                  headers: {'x-auth-token': l},
                })
                  .then(function (e) {
                    d(e.data), x(''), f(!1);
                  })
                  .catch(function (e) {
                    f(!1),
                      x('Something Went Wrong Or you Tried to be oversmart'),
                      console.log('unable to fetch result');
                  });
            },
            [e.match.params],
          );
          var v = r.name,
            I = r.branch,
            N = r.roll;
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              C.a,
              {loading: !v},
              l.a.createElement('h3', null, "Candidate's Name: ", v || 'xxxxxxxxxxx'),
              l.a.createElement('h3', null, 'Branch: ', I || 'xxxxxxxxxxx'),
              l.a.createElement('h3', null, 'Roll No: ', N || 'xxxxxxxxxxx'),
            ),
            l.a.createElement('hr', null),
            l.a.createElement(
              C.a,
              {loading: !u, paragraph: {rows: 0}},
              ' ',
              l.a.createElement('h4', {style: {textAlign: 'center'}}, 'Semester ', u.semester),
            ),
            l.a.createElement('hr', null),
            l.a.createElement(
              C.a,
              {loading: p, paragraph: {rows: 5}},
              l.a.createElement(
                'table',
                null,
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, 'Sub Names'),
                    l.a.createElement('th', null, 'Grade'),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, A),
                    l.a.createElement('td', null),
                  ),
                  u.subjects.map(function (e, t) {
                    return l.a.createElement(
                      'tr',
                      {key: t},
                      l.a.createElement('td', null, e.subName),
                      l.a.createElement('td', null, e.subGrade),
                    );
                  }),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('br', null),
                      'SGPA: ',
                      u.sgpa,
                      l.a.createElement('br', null),
                      'CGPA: ',
                      u.cgpa,
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        D = a(359),
        P = a(361),
        R = a(353),
        F = a(171),
        B = a.n(F),
        q = T.a.Header,
        J = O.a.Search;
      function H(e) {
        var t = e.searchDisplay,
          a = void 0 !== t && t,
          r = e.history,
          c = Object(n.useContext)(i),
          s = Object(n.useState)({name: '@'}),
          m = Object(o.a)(s, 2),
          u = m[0],
          E = m[1];
        Object(n.useEffect)(function () {
          return E(JSON.parse(localStorage.getItem('student')));
        }, []),
          console.log(u);
        var g = l.a.createElement(
          D.a,
          null,
          l.a.createElement(
            D.a.Item,
            null,
            l.a.createElement(
              'div',
              {
                onClick: function () {
                  c.setIsAuthenticated(!1),
                    console.log(c),
                    localStorage.setItem('auth-token', ''),
                    localStorage.setItem('student', ''),
                    r.push('/login');
                },
              },
              'Logout',
            ),
          ),
        );
        return l.a.createElement(
          q,
          {className: 'navbar'},
          l.a.createElement(
            'div',
            {className: 'logo'},
            l.a.createElement('img', {src: x.a, id: 'navbar-logo', alt: 'IIIT UNA'}),
          ),
          l.a.createElement(
            'div',
            {className: 'nav-links'},
            a &&
              l.a.createElement(J, {
                placeholder: 'input search text',
                onSearch: function (e) {
                  return console.log(e);
                },
                style: {marginRight: '10px'},
              }),
            l.a.createElement(
              d.b,
              {to: '/result/prev'},
              l.a.createElement('img', {src: B.a, style: {marginRight: '15px'}}),
            ),
            l.a.createElement(
              P.a,
              {placement: 'bottomCenter', overlay: g},
              l.a.createElement(
                R.a,
                {size: 40, style: {backgroundColor: '#3726A6'}},
                u.name[0],
                u.name.split(' ')[1] ? u.name.split(' ')[1][0] : '',
              ),
            ),
          ),
        );
      }
      var G = function (e) {
          var t = Object(n.useState)(!1),
            a = Object(o.a)(t, 2),
            r = (a[0], a[1], Object(n.useState)(!1)),
            c = Object(o.a)(r, 2),
            s = (c[0], c[1], T.a.Content),
            m = T.a.Footer;
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              T.a,
              {className: 'layout'},
              l.a.createElement(H, e),
              l.a.createElement(
                s,
                {style: {padding: '0 50px'}},
                l.a.createElement(
                  'div',
                  {className: 'site-layout-content'},
                  l.a.createElement('div', {className: 'public'}),
                  l.a.createElement(U, e),
                ),
              ),
              l.a.createElement(
                m,
                {style: {textAlign: 'center'}},
                'Cybernauts \xa9 Web Development Club IIIT Una',
              ),
            ),
          );
        },
        L = a(354),
        K = a(355),
        M = T.a.Content;
      function V(e) {
        var t = e.history,
          a = Object(n.useState)([]),
          r = Object(o.a)(a, 2),
          c = r[0],
          s = r[1];
        return (
          Object(n.useEffect)(function () {
            var e = JSON.parse(localStorage.getItem('student')),
              a = localStorage.getItem('auth-token');
            return (
              e || t.push('/'),
              m()({
                url: '/api/result/getAll/'.concat(e.roll),
                method: 'get',
                headers: {'x-auth-token': a},
              })
                .then(function (e) {
                  s(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                }),
              function () {
                console.log('cleanup');
              }
            );
          }, []),
          l.a.createElement(
            'div',
            null,
            l.a.createElement(H, {history: t}),
            l.a.createElement(
              M,
              {style: {padding: '0 50px', textAlign: 'center'}},
              l.a.createElement(
                'div',
                {className: 'site-layout-content'},
                l.a.createElement(v.a.Title, {level: 3}, 'Home Dashboard'),
                l.a.createElement('hr', null),
                l.a.createElement(v.a.Title, {level: 4}, 'All Results'),
                l.a.createElement(L.a, {dashed: !0}),
                l.a.createElement(K.b, {
                  style: {width: '50vw', margin: 'auto', padding: '0 24px'},
                  size: 'large',
                  bordered: !0,
                  dataSource: c,
                  renderItem: function (e) {
                    return l.a.createElement(
                      K.b.Item,
                      null,
                      l.a.createElement(
                        d.b,
                        {
                          style: {margin: 'auto'},
                          to: '/result/'.concat(e.semester, '/').concat(e.studentRoll),
                        },
                        'Semester ',
                        e.semester,
                      ),
                    );
                  },
                }),
                l.a.createElement('br', null),
              ),
            ),
          )
        );
      }
      var W = a(115),
        z = function (e) {
          var t = e.component,
            a = (e.roles, Object(W.a)(e, ['component', 'roles'])),
            r = Object(n.useContext)(i).isAuthenticated;
          return (
            console.log(r),
            l.a.createElement(
              E.b,
              Object.assign({}, a, {
                render: function (e) {
                  return r
                    ? l.a.createElement(t, e)
                    : l.a.createElement(E.a, {to: {pathname: '/login', state: {from: e.location}}});
                },
              }),
            )
          );
        },
        Q = function (e) {
          var t = e.component,
            a = Object(W.a)(e, ['component']),
            r = Object(n.useContext)(i).isAuthenticated;
          return l.a.createElement(
            E.b,
            Object.assign({}, a, {
              render: function (e) {
                return r
                  ? l.a.createElement(E.a, {
                      to: {pathname: '/result/prev', state: {from: e.location}},
                    })
                  : l.a.createElement(t, e);
              },
            }),
          );
        };
      var X = function () {
        return l.a.createElement(
          d.a,
          null,
          l.a.createElement(
            E.d,
            null,
            l.a.createElement(E.b, {exact: !0, path: '/', component: I}),
            l.a.createElement(Q, {exact: !0, path: '/login', component: w}),
            l.a.createElement(Q, {path: '/login/forgot', component: k}),
            l.a.createElement(z, {path: '/result/:sem/:roll', component: G}),
            l.a.createElement(z, {path: '/result/prev', component: V}),
            l.a.createElement(E.a, {to: '/'}),
          ),
        );
      };
      c.a.render(
        l.a.createElement(u, null, l.a.createElement(X, null)),
        document.getElementById('root'),
      );
    },
    59: function (e, t, a) {
      e.exports = a.p + 'static/media/downloaded2.93ba9122.png';
    },
  },
  [[186, 1, 2]],
]);
//# sourceMappingURL=main.cb091ec3.chunk.js.map
