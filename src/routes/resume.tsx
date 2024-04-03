import { createSignal } from "solid-js";
import "./resume.css";

export default function Resume() {
  return (
    <main class="w-full h-full" id="resume">
      <header id="header" class="clear">
        <div>
          <div class="flex justify-between">
            <h1 class="name ">Gregory Waxman</h1>
            <a
              target="_self"
              class="flex gap-2 items-baseline !text-sm print:hidden group"
              href="/gregory-waxman-resume.pdf"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="animate-bounce w-[1em] h-[1em] group-hover:animate-none"
              >
                <path
                  d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="!font-normal">PDF</span>
            </a>
          </div>
          <h2 class="label">
            Leader &amp; full stack engineer with 16 years of professional
            experience
          </h2>
        </div>

        <span class="location">
          <span class="address">South Carolina,</span>
          <span class="countryCode">US</span>
        </span>

        <div id="contact">
          <div class="email">
            <span class="far fa-envelope"></span>
            <a
              class="hide-href-print"
              href="mailto:gregorywaxman+resume@gmail.com"
            >
              gregorywaxman+resume@gmail.com
            </a>
          </div>
        </div>

        <div id="profiles">
          <div class="item">
            <div class="network">
              <span class="fab fa-linkedin linkedin social"></span>
              <a
                class="url-link"
                target="_blank"
                href="https://www.linkedin.com/in/greg-can-think"
              >
                <span class="username">greg-can-think</span>
                <span class="url">linkedin.com/in/greg-can-think</span>
              </a>
            </div>
          </div>
          <div class="item">
            <div class="network">
              <span class="fab fa-github github social"></span>
              <a
                class="url-link"
                target="_blank"
                href="https://github.com/Akkuma"
              >
                <span class="username">Akkuma</span>
                <span class="url">github.com/Akkuma</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section class="section">
        <header>
          <h2 class="section-title">Work Experience</h2>
        </header>

        <section id="work">
          <section class="work-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">Aug 2023</span>
                <span class="endDate">- Current</span>
              </div>
              <div class="position">Principal Software Engineer</div>
              <div class="company">Bison Technologies</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAyBJREFUOE9VU0tME0EYnmnZPoTWVh4RjAGKCT7QcIHGSiJEgweDQrUkBfpSax8kUGj0YCRGJWrASmqiVhKF0loiRMCIJw5GEw8qB4lG5IKADyzYdmuB3VLaNbMPjbvJ7uzOfP//zfd9AwEAAAIIKDSgxxQ4bT5jipPknaKiHYdn5+bOx6LRmi052cce3O99DiEEgKIABQFAD3QDhNYZ9O6iQsXjzzMz1wUiYSRdJHrpuefpsdisbcHF4M1EMsGTZEheKZXK+vdTU139fX0GhEX1gNVma4rguHlbXq5+dZVQx+NEaVXVIbtBr1tFzHQ63dUIHrkIKQhkclknEY9bpXKZ8SFihKro9AZ3JBxuEQhF0znZWdei0WjnYCBQQHegAGg0GNzRUKiFj2GpvNxc+8LXBY9cJu/0+XwdNANLS2vJty+zH9Be0ITf7+tA27I32y2pZGrTfpWq99n4+BxBrGVlZmY9DYVCx7crFHs97tsfEZ6+7M3NlsUf3+9WHqzMa3W0BZGYeqNxLEWl5gf6vecaGrQTFORPY3zeMlrv8/k7UEOmAATA2d6eHw6Hrwil0u7Q4s8XQoHAc6S6+sbryclC3sbGAYIgVDiON6VhWLhCpSpBTVgojadt1BtNYz5vXy2y59RZ89F9e3ZPOlodwdq6uqRMJvOTBFlAxsmKOrVaqtfpVukCrK00EW1Dw5yyvFzpcDiCTqcz/5bLNY8KqzWaTwmS2IXGEsnm+cHAowKuKasB89I2aj0YJtg60N9fS1GUAEK4juhRSUqgPqEm0JqRJyNiHg+uM0FiQshc6AMCYDSYvEKppBskEqVrJHkyhuM16ekZ8WgUF4vE4l/DQ8PZSOB/yUU1IPuDgqDd2Z6/tBSchgC6VlZiFzY2kjy0GEtLSykUhQqXq2eeUYwJyd8oc4rSU4iJ0eTlYdgQTKVy8N+xLpFYFPB7va00jmXMwVkX2NixO7JZrU3FxTsn3rx7e5lcI8yjo6N8znLmEDGs/2PwHwvmsAGNpn5ZJBYHfGx3Ti+uGB1lRhCWAacOy0Tb2OhRlpVdQtYylnPZYxj8AZv+VChCOS8eAAAAAElFTkSuQmCC"
              />
              <a target="_blank" href="https://bisonok.com">
                bisonok.com
              </a>
            </span>
            <ul class="keywords">
              <li>aws lambda</li>
              <li>appsync</li>
              <li>dynamodb</li>
              <li>react</li>
              <li>tailwind</li>
              <li>node.js</li>
              <li>shadcn/ui</li>
              <li>storybook</li>
              <li>typescript</li>
              <li>valtio</li>
              <li>vite</li>
              <li>vitest</li>
            </ul>
            <div class="item" id="work-item">
              <ul class="highlights">
                <li>
                  <p>
                    Mentored the engineering team across multiple areas such as
                    React, TypeScript, and AppSync
                  </p>
                </li>
                <li>
                  <p>
                    Created multiple ADRs for improving and unifying our
                    frontend tech stack
                  </p>
                </li>
                <li>
                  <p>
                    Broke out shared functionality such as components, urql
                    setup, and routing into reusable package
                  </p>
                </li>
                <li>
                  <p>
                    Built our User Manager solo, frontend & backend, while
                    acting as an example of best practices
                  </p>
                </li>
                <li>
                  <p>
                    Improved DX for engineers by introducing better tools and
                    improving their configuration
                  </p>
                </li>
                <li>
                  <p>
                    Led development of our UI library based on{" "}
                    <code>shadcn/ui</code>
                  </p>
                </li>
                <li>
                  <p>
                    Dramatically improved CI, ~50% speed up and ~50% cost
                    reduction
                  </p>
                </li>
                <li>
                  <p>Built, altered, and maintained GitHub Actions</p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">Feb 2022</span>
                <span class="endDate">- Aug 2023</span>
              </div>
              <div class="position">Staff Software Engineer</div>
              <div class="company">Intellimize</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAaxJREFUOE9VU7uVnEAQrFpDsKYeBKIk4AKANM67MGSdpxwggGWDOENpLHJh5ZRefxhWGLyZnunq6uoa4vgIQABhC1vqPKLt/ReX7tUHur8/M/qKAICZKMbaQC3X9gZz+/apy+Ud3e6V6IelVuaU3GNxJFef4OVd1Ip+b4OxwwSzc5kJGZCd3asviD8ixFX91loek18kO9UXQMcheK8HCdNZRyv7ZwIk/XL4wqaos1wHQJNVkFdAtJC1so/owlks1QeE3+yfN485AxYGpFZ1CWBjC4EFLtdB0C+SjaAR3T67SB7HlCWcAfutPQoG06X6Ei4hUkxmZLfP7oelHghOOclsYWvDNTEH4Hb9A+B76maMRr7tc0zgOkCYQnU70oq3vTWbuA+8+aV+CGi8JadhLTxn2+leDxCn03Lhg9KC2/RePSg25r503Yh+n53mUg+iJhcrKKywMYbB81vqB4jmtCVH9NvsN2yM1kLMyRBeAbIHA4AxKJAj++1/DY50s/IxxiLMzQDQxOMQRI7oNh+jXEQzUnlf7kSbULwou5QMDk1JjLIWXOB04vloihP/Ad+j6xcEmFhQAAAAAElFTkSuQmCC"
              />
              <a target="_blank" href="https://intellimize.com">
                intellimize.com
              </a>
            </span>
            <ul class="keywords">
              <li>node.js</li>
              <li>eslint</li>
              <li>javascript</li>
              <li>typescript</li>
              <li>valtio</li>
              <li>express.js</li>
              <li>react</li>
              <li>aws</li>
              <li>mongodb</li>
              <li>vite</li>
              <li>vitest</li>
            </ul>
            <div class="item" id="work-item">
              <ul class="highlights">
                <li>
                  <p>
                    Revamped the entire frontend, resulting in a 75% reduction
                    in load time and significant productivity enhancements
                  </p>
                </li>
                <li>
                  <p>
                    Upgraded all tooling replacing previous unmaintained and
                    outdated tooling
                  </p>
                </li>
                <li>
                  <p>
                    Led and guided the development of Rules Based
                    Personalization
                  </p>
                </li>
                <li>
                  <p>
                    Created and built fully functioning CI/CD pipelines to
                    streamline development and deployment processes
                  </p>
                </li>
                <li>
                  <p>
                    Successfully learned, built, and maintained Cloudfront usage
                    for frontend and API
                  </p>
                </li>
                <li>
                  <p>
                    Provided team leadership by offering guidance on solutions,
                    mentoring team members, &amp; inspiring others
                  </p>
                </li>
                <li>
                  <p>
                    Developed a Shopify app integration leading to two customer
                    sales within the first two months
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <label for="work-item-2"></label>

            <header class="clear">
              <div class="date">
                <span class="startDate">Apr 2021</span>
                <span class="endDate">- Feb 2022</span>
              </div>
              <div class="position">Senior Software Engineer</div>
              <div class="company">Bubbles</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAmNJREFUOE9lk01IVFEUx3/3jcw8CyO1soXSF1QkRgoFaWYhWFCBWZAFgWAucje06GtXjotaZIvamLVo4aLUVfRJMWITSGERKRV9YVAUoybYzHOce+Pedydn6i4ej3vOued//v//Efx3BAKFAgSg9Fco/ZN7/KDJQSllK3SiLvCDNppVaNJzYvMP/NMgGpvj4RPJ6Me0QbFhjaChzqGuJi/rgUwPqQxSfSYm4VB7kjefJFXrBFsrA+b+2YjkxVtJxSqH3qsuRYV+sUUgzTTxSUV1U4LSEoeei0FWljk5uD6PS1rCHt/iklj/QooWZ3GgRz7QmuDrDxi8nY8bsqwpTalNFIqkB9sPepQug/4ed57EwadzNJ+Y5U63S2VFVmelwdn5LH8vX6fZ0+Zx63IIrRlSKtXZNcvdaJqhgXytiqnRxOQI4ktm4Gxr8ti705lHcCzsUbIUImeCPmArvd/cypthRMDJDo/J6SwSW8OzLF8CkbMhU+DLohDGF5YF3V3bTChOd6T4GTcYBUpKFbnk8WBIEu1ziXSleP4qzcB117bQrbPIRFGz32NfvT+iceLwSJrG4x6Pb4YoKBBsbkxStd6hrTnAxvKAkTRD5dh7Sf3RhCE8x4lNrUmmZ+BRr8vElOJUZ4ob91K07M6j+0LQoEl6gl1HEhQXCvqvhfQAAimlGdk30m8WFThcORdky6aMnD782LAkfN7j14wi1reAYutGpJLKTKMgPqU43J7k3bhiRYlDQ63/iObny3fJ2jJhrKwR+MxktjGzZnYbtbHuR9OMfZBmQctXOzTsCFBbnfeXC13yB4UDFtU8a7LbAAAAAElFTkSuQmCC"
              />
              <a target="_blank" href="https://usebubbles.com">
                usebubbles.com
              </a>
            </span>
            <ul class="keywords">
              <li>aws</li>
              <li>javascript</li>
              <li>node.js</li>
              <li>react</li>
              <li>redux</li>
              <li>serverless</li>
              <li>typescript</li>
            </ul>
            <div class="item" id="work-item">
              <div class="summary">
                <p>First of three engineering hires</p>
              </div>
              <ul class="highlights">
                <li>
                  <p>
                    Reduced CI test time by more than 60%, leading to faster
                    development and testing cycles
                  </p>
                </li>
                <li>
                  <p>
                    Enhanced monorepo webpack integration and implemented fast
                    refresh for improved development experience
                  </p>
                </li>
                <li>
                  <p>
                    Simplified environment setup by automating AWS environment
                    output usage
                  </p>
                </li>
                <li>
                  <p>
                    Improved component structure, variation, and implementations
                    for better code organization and reusability
                  </p>
                </li>
                <li>
                  <p>
                    Led development on image, video, and face recording
                    functionality over the span of six months
                  </p>
                </li>
                <li>
                  <p>
                    Conducted code reviews, ideation for technical improvements,
                    and interviews
                  </p>
                </li>
                <li>
                  <p>
                    Managed very large code merges and conflicts across features
                  </p>
                </li>
                <li>
                  <p>
                    Provided leadership guidance and feedback, ranging from
                    culture to roadmap
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">Aug 2020</span>
                <span class="endDate">- Apr 2021</span>
              </div>
              <div class="position">Senior Software Engineer</div>
              <div class="company">HubTran (acquired by TriumphPay)</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <ul class="keywords">
              <li>elm</li>
              <li>react</li>
              <li>ruby</li>
              <li>rails</li>
              <li>postgres</li>
            </ul>
            <div class="item" id="work-item">
              <ul class="highlights">
                <li>
                  <p>
                    Reduced Pusher usage leading to over a 50% cost reduction,
                    80% reduction in scripting time, 66% to 93% reduction in
                    total messages sent, and 98% reduction in React renders
                  </p>
                </li>
                <li>
                  <p>
                    Decreased total delivered JavaScript size by 50% for
                    improved website performance
                  </p>
                </li>
                <li>
                  <p>
                    Successfully migrated IDs from audit tables from int to
                    bigint with no downtime, ensuring uninterrupted operations
                  </p>
                </li>
                <li>
                  <p>
                    Updated project tooling from Webpack v1 to Webpack v5,
                    alongside multiple Docker enhancements
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <label for="work-item-4"></label>

            <header class="clear">
              <div class="date">
                <span class="startDate">May 2018</span>
                <span class="endDate">- Apr 2019</span>
              </div>
              <div class="position">Senior Software Engineer</div>
              <div class="company">Gush</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAzdJREFUOE9NU2swlFEYfs5HibXYolgTalgmJvtDY7pM0rjMmCZU419NDV2mJJP8KFHGH11GYqKicmumkjZLaUVRrUITLWM2i2ZbVmpZl7SzZL/mfJ9VZ+Y73znnPec57/uc5yFYbIQALAuAAPCQuD4qvJbk4y3e6SgQiMxm85xmUFuXsHdXLg3TbbTRMf1AQMDSZULw8HFdaUzk9kRHodCKzf0H1RrUJ5ycTu1VuBOWmFjCckgcAO3p/EHNs9KEPTGJNJW+1jYMKVq5sNfuSIv+YjEDtKH1u+fEJcOwP6vvN1iPcqePn8iOKsjPUDA2Nmg+lom5zheYFU1jfMIG2iELVolZ0wr7lfYvnUPR7OrUMludE/4PAEBXt0opDQ7aopIr8C03Byb7n3j1XYplO4IhCQ1CgJ83tMp2pL/Xm4xPsleBwESzXuJAN6xfEHuuYZqPZuGPthqP1RIMx4WjIT8VhKU1AqpaBRrPppjSp+AFWgJd5lglIMZxo8XFxQVNxzKh6aiBQhSFiQCx8mbCtq2U9cCwzVDJG/E19zRKzdIf9WMfA4leY+ABQDA8MrLgKXZn3hVVorc0F8Xr9kElyyGExdprKafUp67nO/S9boPm3BEU2+2AQmAbRhoK3vC5gUXX5x5l8MbALazFgpyoeFwdc/4921slEIfESxsrL93f4O+3oa+FAhxGOQmFTCQMw/PCfwCem+KkPYq7XSKRiHvfoS8DsBMKLO4eaxgbwnAv9e5GBYxVJbhHJJC5ucVCfkW+lAFlI/XE+biTyQdk6yW+VoVArx+1GDpVzEjRAyxM98PWyYDbM1shc1sdC/llOeFo5CTMK6vkVvnFxMP7LyiLKvCtuhYuMzrML/+NeYcFjE6uRJ/ZCx+CgqCdMx4yyvLKeCVyiuDNUN/0NttJPZg1VVXC3daq88UkI4DezQO61a4YEjrOMOO6lMmneWX/KZEOeYv4RB/0iVb1J0cEjKd9GvVFvXQbelbYtjv+mVc6qzsqRzqfdi/yzt3JC2nRif87bY93WMlAyPakrw72eb8qM9J4s/GioeXSijkhLfnSGl+yKiFOEYlnppruXLHyY3Wu1YZUP38BpYpVMiM0iG4AAAAASUVORK5CYII&#x3D;"
              />
              <a target="_blank" href="https://gush.com">
                gush.com
              </a>
            </span>
            <ul class="keywords">
              <li>python</li>
              <li>react</li>
              <li>trio</li>
              <li>redux</li>
            </ul>
            <div class="item" id="work-item">
              <div class="summary">
                <p>First engineering hire</p>
              </div>
              <ul class="highlights">
                <li>
                  <p>Led all frontend development</p>
                </li>
                <li>
                  <p>
                    Rapidly learnt basic Python including leveraging Trio to
                    combine data from Google, Yelp, &amp; Foursquare
                  </p>
                </li>
                <li>
                  <p>
                    Created a basic agile-like process to centralize and
                    organize development
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">Jun 2015</span>
                <span class="endDate">- Apr 2018</span>
              </div>
              <div class="position">Senior Software Engineer</div>
              <div class="company">Virtru</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Remote</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAolJREFUOE9VU89P1GAQfbP9FiFLgCucVuNBE40EE4ks8B/Qbt2EKImJXjwAmniVNkC2e/cA+ycIMYH9wcUzPzREXWPCRWMCF+EKuhvQtjtm+rUb/A79mnbmzZv3ZggACABHT6DngZP7E/J8CpgCKANmCWgxaKvLwMr5ZnGPCGAmEElWlC0Xw7CcbQAT4AjrBKB9REEY9f1gcPLOMG7dHv5Qnrk5JvHyQ8Cio0y3ycQZEBq9UIXT6tKRZqf59dtL2aePn7zzg+CafF2dvt6leROQNqUyTYRol9v10hxx0pKm0jkEPF//sYIUPQt9/1N55sYYdRfcXBjwLhMaQdW7+1903MtlAHmfffPt/cHXL/c/fj8YJ8N014jwsJfU1dPqYoc22c70FcLPi01vrz+/mP1Nwb2wUnorAAP5xeyZf3FISq2TspwmgF9BrTQkgiVF05bDDKqGtaJtmG4F4Hyw5UXaRZpZzjGAPgGQT9Ww5tmih3YNMCy3ycxbYd17FMUQGmHcoiQo06kAyFNSKah5ttZbT4RhOU3xPgXuZkY+rWi8MwPatYgVKTNuoe4NdUxlFopNAjLCCKDXQb34UhfQ5ipr4RigPjIsZ42QiLh8FIUQQZkLTISGMujFxUZxT+NohAF7KdtsB4dtxjr1FNycH/Cu9JjYSCRaxYJGoxYrJxeJgO5ntHlEKRqPBklNOdsgTDC4HNZKc0mxxH+tigZJma9WU0jNgrAT1rzJZFKRFtXBGaGdIVU4qywfJYJKYn9+OduCvwHGCAOtsF7qFctkHTroMtJMepkIOGHCfsxmlIHB+H3Hr5Umo2HX2XoTE5F6bDf3N+B5IllnZOKkVlvWWWHlfEOvs2ywZP0D4J4kVhirVJwAAAAASUVORK5CYII&#x3D;"
              />
              <a target="_blank" href="https://www.virtru.com">
                virtru.com
              </a>
            </span>
            <ul class="keywords">
              <li>backbone</li>
              <li>browser extensions</li>
              <li>jwt</li>
              <li>webpack</li>
              <li>express</li>
              <li>node.js</li>
              <li>spirit</li>
            </ul>
            <div class="item" id="work-item">
              <ul class="highlights">
                <li>
                  <p>
                    Led development of Google Vault Extension and Google Drive
                    file proxy service acting as a model for future projects
                  </p>
                </li>
                <li>
                  <p>
                    Refactored and helped develop VJWT, a JWT spec with enhanced
                    security features
                  </p>
                </li>
                <li>
                  <p>
                    Integrated in a FIPS compliant crypto library to meet the
                    security needs of customers
                  </p>
                </li>
                <li>
                  <p>
                    Managed and mentored team members and contractors as a tech
                    lead
                  </p>
                </li>
                <li>
                  <p>
                    Rewrote and extended key parts of the DLP rules engine, key
                    to Virtru's success, and enhanced handling of complex
                    violations
                  </p>
                </li>
                <li>
                  <p>
                    Developed voltron to allow for building a single extension
                    from multiple independent repos
                  </p>
                </li>
                <li>
                  <p>
                    Created new OU functionality that included new db schema,
                    associated documentation for schema changes, API updates,
                    frontend architecture improvements, CSS and associated
                    templates
                  </p>
                </li>
                <li>
                  <p>
                    Improved our Secure Reader loading performance, reduced
                    bugs, and added a whitelabeling solution
                  </p>
                </li>
                <li>
                  <p>Ran our knowledge sharing sessions</p>
                </li>
                <li>
                  <p>Led second round technical interviews</p>
                </li>
                <li>
                  <p>
                    Contributed to several open source projects eslint, webpack,
                    spirit-js, and more
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <label for="work-item-6"></label>

            <header class="clear">
              <div class="date">
                <span class="startDate">Jun 2012</span>
                <span class="endDate">- Jan 2015</span>
              </div>
              <div class="position">UI/Software Engineer</div>
              <div class="company">SPARC (acquired by Booz Allen Hamilton)</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Charleston, SC</span>
            </span>
            <span class="url">
              <span class="fas fa-external-link-alt"></span>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/sparc-llc"
              >
                linkedin.com/company/sparc-llc
              </a>
            </span>
            <ul class="keywords">
              <li>mongodb</li>
              <li>angularjs</li>
              <li>asp.net-web-api2</li>
              <li>bootstrap</li>
              <li>c#</li>
              <li>ejs</li>
              <li>express</li>
              <li>git</li>
              <li>github</li>
              <li>gulp</li>
              <li>jade</li>
              <li>javascript</li>
              <li>jquery</li>
              <li>less</li>
              <li>mongoose</li>
              <li>mysql</li>
              <li>node.js</li>
              <li>react</li>
              <li>servicestack</li>
            </ul>
            <div class="item" id="work-item">
              <div class="summary">
                <p>Worked on in house products and outsourced products</p>
              </div>
              <ul class="highlights">
                <li>
                  <p>
                    Led the second phase of new feature development for
                    OpsAssure, a scheduling and task management app
                  </p>
                </li>
                <li>
                  <p>
                    Handled all video player development and on Stre.am, which
                    led to contributions to video.js
                  </p>
                </li>
                <li>
                  <p>
                    Architected, implemented, launched, and maintained a product
                    for Core Care Medical
                  </p>
                </li>
                <li>
                  <p>
                    Contributed to new architecture decisions, refactored
                    crucial code, and ported MySQL to MongoDB on 520
                  </p>
                </li>
                <li>
                  <p>Mentored and taught a QA JavaScript and automation</p>
                </li>
                <li>
                  <p>
                    Rapidly learnt and contributed to 520 ensuring a successful
                    release to the VA, while providing mentoring and support to
                    others
                  </p>
                </li>
                <li>
                  <p>Filled the role of domain expert for Stre.am</p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">Sep 2010</span>
                <span class="endDate">- Jun 2012</span>
              </div>
              <div class="position">Interface Engineer II</div>
              <div class="company">PeopleMatter (acquired by Snagajob)</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Charleston, SC</span>
            </span>
            <span class="url">
              <span class="fas fa-external-link-alt"></span>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/peoplematter"
              >
                linkedin.com/company/peoplematter
              </a>
            </span>
            <ul class="keywords">
              <li>c#</li>
              <li>javascript</li>
              <li>squishit</li>
              <li>asp.net</li>
              <li>css</li>
              <li>css-sprites</li>
              <li>css3</li>
              <li>html5</li>
              <li>jquery</li>
              <li>less</li>
              <li>tfs</li>
            </ul>
            <div class="item" id="work-item">
              <ul class="highlights">
                <li>
                  <p>
                    One of two interface engineers responsible for frontend
                    development
                  </p>
                </li>
                <li>
                  <p>
                    Implemented SquishIt, an open source JavaScript &amp; CSS
                    minifier, and created a higher level abstraction to
                    streamline internal use
                  </p>
                </li>
                <li>
                  <p>
                    Learnt, introduced, and used LESS through Chirpy to improve
                    readability and maintainability of CSS
                  </p>
                </li>
                <li>
                  <p>
                    Refactored and fixed several open source projects used
                    internally, including SquishIt
                  </p>
                </li>
                <li>
                  <p>
                    Actively developed cross-browser compatible styling in IE7
                    through IE9, Safari, Firefox, and Chrome
                  </p>
                </li>
                <li>
                  <p>
                    Architected css architecture and hierarchy alongside general
                    JavaScript practices for the frontend
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="work-item">
            <label for="work-item-8"></label>

            <header class="clear">
              <div class="date">
                <span class="startDate">Jun 2007</span>
                <span class="endDate">- Sep 2010</span>
              </div>
              <div class="position">Software Engineer II</div>
              <div class="company">Blackbaud</div>
            </header>

            <span class="location">
              <span class="fas fa-map-marker-alt"></span>
              <span class="location">Charleston, SC</span>
            </span>
            <span class="url">
              <img
                class="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAp9JREFUOE9Vk0tIlFEUx//n+2Z8zEsyMRUZe/gEGzKCgrTARUZKi2gjLpQWE9UipUiEolVQaRpRi6I2ERgGQaFQQoG0qMCFzYTjIyfQSpMUmxm1eX0n7r3zOXoW33e55/7/95x7f5cgguQXxACL/9jvY4ycRjKoDAQG8TfGyhDtKxgWeTOISEmVnmD1j3oSycIPBHLJhSJhKuSYQxZ9vi6294DPTJNYJXKa39eigZ4xixmlYlXP5j3lOGHkNaCmYFikZTbDP+phrH1Roq2SzSWrzZStFTPuf54zc8rg6+AMA7vFuCnTibbcYpxeCACsetgwJdGF2oCAYKy6aQ9l+EY9rE/L3UWcsxfhWlENCqdfyNVE9vQxSLWqQdSiG+tuyh7vbU+wq0+Wz8BZZx6uF9bjY2gRxVkWPFkaw6PIH+Wu9BuGVi3cQVmB3ocEq1dMxzkKr70cD9wn0b/0GYvJVVzMr8eF2VdYMdYwsP5T+lgpK+W23C0NEpz0miB4bRXoLDiMnTP3ZKF3c4+gzlGK1vl++EuvoOX7cwxEf6SM1rspe7yvXdMjsoVVI47ztv3o3FGLkuBNCFD6th1HraMUVxde42lJG5pnH+NdbAV2ssBgRwc5J7oqDVgDwmCNgWrdBl9ZJ96GxrAcj6J5+0GcCN4HM+NNfA5ANmySHiAZ2+WWQ8dk1wQYFeKAwkYM1XoeevIbZJ+3l0bwPvZLnrBDy5S8KyhpMlJ1o1Jy4JzsqmSOB0TJ4ooiRhpwYeLQ0kxLbhlIxKtMkFTSNXW50WAaNEnbwmMKHsUVQ9PRFCrrGUoBlUZdVoL4CIB8BW3q8oVSPFVgkWA5Gq64NUGpp5t6TApXM3KmLh2KGq5TFoQl3gk4gpla+OXf8juf1HUTiJXmP9Y1Du4qs1gNAAAAAElFTkSuQmCC"
              />
              <a target="_blank" href="https://blackbaud.com">
                blackbaud.com
              </a>
            </span>
            <ul class="keywords">
              <li>asp.net</li>
              <li>css</li>
              <li>javascript</li>
              <li>jquery</li>
              <li>sql</li>
              <li>tfs</li>
              <li>vb.net</li>
              <li>visual-studio</li>
            </ul>
            <div class="item" id="work-item">
              <div class="summary">
                <p>
                  First batch of engineering hires from RIT leading to
                  additional RIT new grad hires
                </p>
              </div>
              <ul class="highlights">
                <li>
                  <p>
                    Acted as a JavaScript mentor, reviewing code as it was
                    checked in and advocating best practices
                  </p>
                </li>
                <li>
                  <p>
                    Took over as lead developer and improved our e-commerce
                    product in multiple areas
                  </p>
                </li>
                <li>
                  <p>
                    Created an extensible shopping cart framework, used across
                    teams &amp; products, as the basis for all payment
                    processing
                  </p>
                </li>
                <li>
                  <p>
                    Exclusively handled production issues, such as data
                    corruption, experienced by clients for five months
                  </p>
                </li>
                <li>
                  <p>
                    Developed and implemented brand new functionality with
                    server-side code, client-side code, and SQL
                  </p>
                </li>
                <li>
                  <p>
                    Introduced jQuery, leading to cleaner, more compatible code
                    for the product
                  </p>
                </li>
                <li>
                  <p>
                    Led the Web Accessibility Initiative to support the needs of
                    our clients
                  </p>
                </li>
                <li>
                  <p>
                    Learnt and used VB.Net and ASP.Net successfully without any
                    previous experience with either
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <section class="section">
        <header>
          <h2 class="section-title">Skills</h2>
        </header>
        <section id="skills">
          <div class="item">
            <h3 class="name">Programming Languages</h3>
            <ul class="keywords">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C#</li>
              <li>Elixir</li>
              <li>Elm</li>
              <li>Python</li>
              <li>VB.NET</li>
              <li>Ruby</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Frontend Engineering</h3>
            <ul class="keywords">
              <li>React</li>
              <li>valtio</li>
              <li>Solidjs</li>
              <li>redux</li>
              <li>jQuery</li>
              <li>Browser extensions</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Styling</h3>
            <ul class="keywords">
              <li>CSS</li>
              <li>SASS</li>
              <li>Tailwind/Uno CSS</li>
              <li>styled-components</li>
              <li>less</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Backend Engineering</h3>
            <ul class="keywords">
              <li>GraphQL</li>
              <li>AppSync</li>
              <li>Node.js</li>
              <li>ASP.NET MVC</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
              <li>SQL Server</li>
              <li>JWT</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Tools</h3>
            <ul class="keywords">
              <li>vite</li>
              <li>vitest</li>
              <li>Jest</li>
              <li>Webpack</li>
              <li>esbuild</li>
              <li>ESLint</li>
              <li>Prettier</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Git &amp; CI/CD</h3>
            <ul class="keywords">
              <li>GitHub</li>
              <li>GitHub Actions</li>
              <li>Bitbucket</li>
              <li>Bitbucket Pipelines</li>
              <li>CircleCI</li>
              <li>Buildkite</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">AWS</h3>
            <ul class="keywords">
              <li>Cloudfront</li>
              <li>SST</li>
              <li>Lambda</li>
              <li>S3</li>
              <li>Secrets Manager</li>
              <li>Serverless Framework</li>
            </ul>
          </div>
          <div class="item">
            <h3 class="name">Cloudflare</h3>
            <ul class="keywords">
              <li>Pages</li>
              <li>Workers</li>
              <li>D1</li>
            </ul>
          </div>
        </section>
      </section>
      <section class="section">
        <header>
          <h2 class="section-title">Education</h2>
        </header>

        <section id="education">
          <section class="education-item">
            <header class="clear">
              <div class="date">
                <span class="startDate">2003</span>
                <span class="endDate">- 2007</span>
              </div>
              <div class="header-left">
                <div class="studyType">BS </div>
                <div class="area">Information Technology New Media</div>
                <div class="institution">Rochester Institute of Technology</div>
              </div>
            </header>

            <div class="item"></div>
          </section>
        </section>
      </section>
    </main>
  );
}
