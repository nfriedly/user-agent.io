import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

import { initAnalytics, trackPageview } from '../analytics';

class Layout extends Component {
  componentDidMount() {
    initAnalytics(); // no-op if already initialized
    trackPageview();
  }

  render() {
    const { title = "What's My User Agent? 🖥 📱 💻 📟", children } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link href="/static/style.css" rel="stylesheet" />
        </Head>
        <style jsx>
          {`
      footer {
       margin-top: 2rem;
      }
      footer .container {
        border-top: 1px solid #ccc;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      footer p:last-child {
        margin-bottom: 0;
      }
    `}
        </style>

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <a className="navbar-brand" href="/">What's My User Agent?</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              {/* todo: set active on the current nav-item and add <span className="sr-only">(current)</span> to the link*/}
              <li className="nav-item">
                <Link href="/"><a className="nav-link">My UA</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/host"><a className="nav-link">Their UA</a></Link>
              </li>
              {/*
               <li className="nav-item">
               <a className="nav-link" href="http://www.incline.systems/" title="React and Next.js Experts">◢ Incline</a>
               </li>
               */}
            </ul>
            {/* git stat
             <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="text" placeholder="email"/>
             <input className="form-control mr-sm-2" type="password" placeholder="password"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
             </form>
             <Link href="/signup">
             <button className="btn btn-primary my-2 my-sm-0 ml-2">Sign Up</button>
             </Link>
             */}
          </div>
        </nav>

        {children}

        <footer>
          <div className="container">
            <p>
              <a href="http://www.incline.systems/">
                ◢ Built by Incline with React, Next.js, Node.js, &
                Bootstrap
              </a>
            </p>
          </div>
        </footer>

        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script
          src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
          integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
          integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
          crossOrigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
          integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
          crossOrigin="anonymous"
        />

      </div>
    );
  }
}

export default Layout;
