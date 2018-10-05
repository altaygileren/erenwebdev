import React from 'react';


const Portfolio = () => {
  return (
    <div>
      <div className="boxCard shadows is-desktop">
        <div className="topOfPage">
          <p className="title is-1">Portfolio</p>
          <div className="fade_rule"></div>
        </div>
        <div className="columns is-desktop is-6 is-offset-3">
          <div className="column is-desktop">
            <p className="portfolioHeaderText">Rock, Paper, Scissor, Spock, Lizard</p>
            <div className="rppsl centerPort" abindex="1" aria-haspopup="true">
              <a href="https://github.com/altaygileren/rpssl"><i class="fab fa-github portOptions"></i></a>
              <a href="https://altaygileren.github.io/rpssl/"><i class="fas fa-desktop portOptions"></i></a>
            </div>
          </div>
          <div className="column is-desktop">
            <p className="portfolioHeaderText">GGCE News</p>
            <div className="crudgame centerPort" aria-haspopup="true">
              <a href="https://github.com/czlinNYC/bones-p3"><i class="fab fa-github portOptions"></i></a>
              <a href="nonstop-birds.surge.sh"><i class="fas fa-desktop portOptions"></i></a>
            </div>
            <center><p>Collaborative effort</p></center>
          </div>
          <div className="column is-desktop">
            <p className="portfolioHeaderText">PostUp</p>
            <div className="gamegame centerPort" aria-haspopup="true">
              <a href="https://www.google.com"><i class="fab fa-github portOptions"></i></a>
              <a href="https://www.apple.com"><i class="fas fa-desktop portOptions"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;