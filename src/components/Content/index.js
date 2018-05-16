import React, { PureComponent } from 'react';
import './Content.css';

export default class Content extends PureComponent {
  renderContentBlocks = (blocks, activeBlock) => {
    return blocks.map((b, i) => {
      return (
          <div
              onClick={() => this.props.toggleBlockClick(b.name)}
              key={i}
              className="content-block"
              style={{
                height: activeBlock ?
                    //calculate the average height in percentage
                    (b.name === activeBlock ? '100%' : '0%') : `${100 / blocks.length}%`,
                backgroundColor: b.color
              }}>
            <div className="content-block-inner">
              <h3>{b.name}</h3>
              <p className={`content-block-subTitle ${(b.name === activeBlock ? "subTitle-actived" : "")}`}
              >IS ACTIVE!</p>
            </div>
          </div>
      )
    })
  }

  render () {
    const {
      isHiddenSideBar,
      blocks,
      activeBlock,
      toggleSideBar,
    } = this.props
    const contentClass = `app-content ${isHiddenSideBar ? '' : 'app-content-actived'}`;
    return (
        <div className={contentClass}>
          <button
              className="toggle-siderbar-button"
              onClick={toggleSideBar}>
            <span> {isHiddenSideBar ? '<' : '>' }</span>
          </button>
          {this.renderContentBlocks(blocks, activeBlock)}
        </div>
    );
  }
}
