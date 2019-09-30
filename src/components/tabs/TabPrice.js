import React from "react";
import styled from 'styled-components'
import Button from "../Button";
import {Icon} from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'

function TabPrice() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="tab-icon tab-icon-price"
      viewBox="0 0 63 48"
      focusable="true"
    >
      <title />
      <g id="icon-price-tag">
        <path
          id="Combined-Shape"
          d="M 35.752 7.65 c -1.1 0 -2.1 0.45 -2.85 1.2 a 3.97 3.97 0 0 0 0.1 5.651 c 0.75 0.7 1.7 1.1 2.75 1.1 a 4.01 4.01 0 0 0 2.851 -1.2 c 0.75 -0.8 1.149 -1.8 1.1 -2.85 c 0 -1.05 -0.451 -2.05 -1.201 -2.8 a 4.072 4.072 0 0 0 -2.75 -1.1 m -0.002 9.15 c -1.35 0 -2.65 -0.5 -3.6 -1.45 c -2.05 -1.95 -2.101 -5.25 -0.15 -7.3 c 1 -1.05 2.3 -1.6 3.75 -1.6 c 1.35 0 2.6 0.5 3.6 1.45 c 0.95 0.95 1.55 2.25 1.55 3.65 c 0.05 1.35 -0.5 2.65 -1.45 3.65 c -0.95 1.05 -2.3 1.6 -3.7 1.6 m -2.148 9.701 a 0.727 0.727 0 0 1 -1.05 0 l -5.3 -5.05 c -0.3 -0.3 -0.3 -0.75 0 -1.05 c 0.25 -0.3 0.75 -0.3 1.05 -0.05 l 5.25 5.1 c 0.3 0.3 0.3 0.75 0.05 1.05 m -5.95 -10.05 l -4.55 0.098 v -1.799 c 0 -0.4 -0.35 -0.7 -0.75 -0.7 c -0.401 0 -0.701 0.3 -0.701 0.7 l 0.05 2.55 c 0 0.3 0.2 0.55 0.45 0.65 c 0.101 0.05 0.15 0.05 0.25 0.05 l 5.301 -0.1 c 0.4 0 0.7 -0.3 0.7 -0.7 c 0 -0.4 -0.35 -0.75 -0.75 -0.75 m 0.1 16.15 a 0.723 0.723 0 0 1 -1.05 0 l -5.301 -5.099 c -0.3 -0.25 -0.3 -0.75 0 -1.05 c 0.25 -0.25 0.75 -0.3 1 0 l 5.301 5.1 c 0.3 0.25 0.3 0.75 0.05 1.05 m -5.951 -10.05 l -4.55 0.1 v -1.8 c -0.05 -0.4 -0.35 -0.75 -0.75 -0.75 c -0.4 0.05 -0.75 0.35 -0.7 0.75 v 2.55 c 0.05 0.3 0.2 0.55 0.5 0.65 c 0.05 0.05 0.15 0.05 0.25 0.05 l 5.25 -0.1 c 0.4 0 0.75 -0.35 0.75 -0.75 s -0.35 -0.7 -0.75 -0.7 m 0.25 15.95 c -0.299 0.3 -0.75 0.3 -1.049 0 l -5.301 -5.1 c -0.3 -0.25 -0.3 -0.75 0 -1.05 c 0.3 -0.25 0.75 -0.3 1.05 0 l 5.251 5.1 c 0.299 0.25 0.35 0.75 0.049 1.05 m -5.95 -10.05 l -4.5 0.1 l -0.05 -1.8 c 0 -0.4 -0.35 -0.75 -0.75 -0.75 c -0.401 0.05 -0.7 0.35 -0.7 0.75 l 0.049 2.55 c 0 0.3 0.201 0.55 0.451 0.65 c 0.1 0.05 0.2 0.05 0.3 0.05 l 5.25 -0.1 c 0.4 0 0.7 -0.35 0.7 -0.75 s -0.35 -0.7 -0.75 -0.7 M 43.903 4.9 c 0 -0.5 -0.122 -0.876 -0.35 -1.1 c -0.279 -0.274 -0.65 -0.3 -0.85 -0.3 H 42.402 c -0.799 0.05 -1.85 0.05 -3.049 0.05 c -5.551 0 -13.151 -0.35 -13.851 -0.35 c -0.15 0 -0.3 0.05 -0.45 0.2 L 1.4 27.952 c -0.1 0.15 -0.2 0.3 -0.2 0.5 s 0.1 0.35 0.25 0.5 l 18.301 17.65 c 0.25 0.25 0.751 0.25 1.001 -0.05 l 23.651 -24.55 c 0.153 -0.197 0.198 -0.488 0.2 -0.7 M 20.252 48.002 a 1.937 1.937 0 0 1 -1.351 -0.55 L 0.6 29.801 c -0.35 -0.349 -0.6 -0.799 -0.6 -1.299 c 0 -0.55 0.2 -1 0.55 -1.4 L 24.202 2.548 c 0.3 -0.299 0.699 -0.5 1.15 -0.549 h 0.15 c 0.1 0 8.1 0.35 13.851 0.35 c 1.149 0 2.149 0 3 -0.05 h 0.35 c 0.7 0 1.3 0.2 1.75 0.65 c 0.45 0.45 0.65 1.1 0.65 1.95 c 0.05 0.85 0.705 14.126 0.65 16.551 c -0.011 0.502 -0.15 1 -0.5 1.4 L 21.602 47.403 c -0.35 0.35 -0.85 0.6 -1.35 0.6"
        />
        <path
          id="Fill-4"
          d="M 62.004 0 c -2.95 6.4 -12.651 6.4 -12.651 6.4 c -7.05 0.1 -10.951 2.25 -12.751 3.601 c -0.7 -0.351 -1.55 -0.2 -2.1 0.35 c -0.7 0.7 -0.65 1.85 0.05 2.549 c 0.7 0.651 1.85 0.651 2.5 -0.049 c 0.55 -0.55 0.65 -1.3 0.4 -1.951 c 5.05 -3.5 11.9 -3.299 11.9 -3.299 C 60.105 7.601 62.855 0.6 62.855 0.6 l -0.85 -0.6 Z"
        />
      </g>
    </svg>
  );
}

function TabPriceContent() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>
            Choose one plan and watch everything on Netflix.
          </span>
          <Button className="btn">
            Try it now
          </Button>
        </div>
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td><Icon icon={cross} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td><Icon icon={cross} size={10}></Icon></td>
                <td><Icon icon={cross} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on laptop, TV, phone and tablet</td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
              </tr>
              <tr>
                <td>Cancel any time</td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
                <td><Icon icon={checkmark} size={10}></Icon></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  )
}

export { TabPrice, TabPriceContent };

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
    padding-bottom 1%;
  }

  .tab-top-content {
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3em 0 0;
  } 

  span {
    grid-column: 2/ 8;
    font-size: 1.3rem;
  }

  .btn {
    margin: 0 1.25rem;
    grid-column: 9/12;
  }

  .tab-bottom-content{
    margin: 2rem auto;
  }

  table{
    width: 100%;
    margin-top:2rem;
    corder-collapse: collapse;
  }

  table thead th{
    text-transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  
  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`
