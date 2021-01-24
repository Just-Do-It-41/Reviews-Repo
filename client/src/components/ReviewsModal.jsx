import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import StarRenderer from './StarRenderer.jsx';
import Slider from './Slider.jsx';
import UserReview from './UserReview.jsx';
import AddReview from './AddReview.jsx';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: 3,
      writeReviewClicked: false,
    };
  }


  render() {
    const ReviewsPopup = styled.div`
    bottom: auto;
    top: 0px;
    opacity: 1;
    visibility: visible;
    display: flex;
    flex-direction: column;
    left: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    background-color: white;
    transition: visibility 0.3s ease 0s, top 0s ease 0s, all 0.3s ease 0s;
    z-index: 9;
    `;

    const Header = styled.div`
      flex: 0 0 auto;
      background: #fff;
      z-index: 8;
      width: 100%;
      padding-bottom: 16px;
      padding-top: 16px;
      padding-left: 8px;
    padding-right: 8px;
    `;

    const ShoeHeader = styled.button`
      transition: none;
      background: #fff;
      font-size: inherit;
      line-height: inherit;
      border: none;
      cursor: pointer;
      overflow: visible;
      -webkit-tap-highlight-color: transparent;
    `;

    const ShoeContainer = styled.div`
    height: 100%;
    display: flex;
    `;

    // const ShoePrice = styled.div`
    // width: 100%;
    // max-width: calc(100% - 60px);
    // padding-right: 28px;
    // padding-left: 12px;
    // padding-top: 8px;
    // display: inline-block;
    // `;

    const Body1 = styled.div`
    flex: 1 1 auto;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    display: flex;
    `;

    const Body2 = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 0 24px;
    font-family: 'Helvetica Neue',Helvetica,Verdana,Arial,Helvetica,sans-serif;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    `;

    const ReviewSummary = styled.div`
    background: transparent;
    border: 0;
    padding: 20px 0 0;
    margin: 10 auto;
    max-width: 1000px;
    display: flex
    flex-direction: column;
    `;

    const ReviewStars = styled.div`
    margin: 0 auto;
    display: flex;
    `;
    // font-family: "Nike TG", Oswald, "Helvetica Neue", Helvetica, Arial, sans-serif;
    const ReviewRating = styled.div`
    font-family: "TradeGothic";
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: #111;
    font-weight: 500;
    display: flex;
    line-height: 1;
    margin: 30 5px;
    `;
    const TotalReviews = styled.div`
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    `;

    const TotalSize = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const TotalComfort = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const TotalDurability = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const SortBy = styled.div`
    display: flex;
    margin-bottom: 0;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 20px;
    overflow: auto;
    height: fit-content;
    `;

    // const TotalComfort = styled.div``;
    // const TotalDurability = styled.div``;

    return (
      <ReviewsPopup>
        <Header>
          <ShoeHeader>
            <div style={{ display: 'block' }}>
              <ShoeContainer>
                <img src="https://static.nike.com/a/images/t_default/a011143b-3f77-40be-a425-d6e8b64c2006/lebron-18-basketball-shoe-M6DgN2.jpg" className="shoeImage" alt="Lebron 18 header" />
                <div className="shoePrice">
                  <h1>Lebron 18</h1>
                  <div style={{ marginBottom: '-4px', color: '#111111' }}>$200</div>
                </div>
              </ShoeContainer>
            </div>
          </ShoeHeader>
          <button type="button" onClick={this.props.moreReviewRender} style={{ outline: 0, position: 'absolute', top: '12px', right: '12px', paddingTop: '16px', zIndex: 10, background: '#fff' }}>
            <AiOutlineClose />
          </button>
        </Header>
        <Body1>
          <Body2>
            <ReviewSummary name="ReviewSummary">
              <ReviewStars name="ReviewStars">
                {StarRenderer()}
              </ReviewStars>
              <ReviewRating name="ReviewRating">48 Reviews</ReviewRating>
            </ReviewSummary>
            <TotalReviews name="TotalReviews">
              <TotalSize name="Size">
                <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Size</div>
                <div>{Slider()}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
                </div>
              </TotalSize>
              <TotalComfort name="Comfort">
                <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Comfort</div>
                <div>{Slider()}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
                </div>
              </TotalComfort>
              <TotalDurability name="Durability">
                <div style={{ fontWeight: 'normal', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '14px', marginTop: '4px', display: 'flex' }}>Durability</div>
                <div>{Slider()}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: 12, fontWeight: 'normal', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '12px' }}>Runs Big</div>
                </div>
              </TotalDurability>
            </TotalReviews>
            <SortBy>
              <div style={{ textAlign: 'left', float: 'left', position: 'relative' }}>
                <select id="fixMe" className="sortBy">
                {/* needs an onChange="fixMe" */}
                  <option value="fixMe">Sort by: Most Helpful</option>
                  <option value="fixMe">Sort by: Newest</option>
                  <option value="fixMe">Sort by: Highest to Lowest</option>
                  <option value="fixMe">Sort by: Lowest to Highest</option>
                </select>
              </div>
            </SortBy>
            <UserReview />
            <UserReview />
          </Body2>
        </Body1>
        {this.props.state.addReviewsModalClicked ? <AddReview handleClick={this.props.addReviewRender} moreReviewRender={this.props.moreReviewRender}/> : ''}
      </ReviewsPopup>
    );
  }
}

export default ReviewsModal;

// const ReviewsPopup = styled.div`
// display: block; /* Hidden by default */
// position: fixed; /* Stay in place */
// z-index: 1; /* Sit on top */
// padding-top: 100px; /* Location of the box */
// left: 0;
// top: 0;
// width: 100%; /* Full width */
// height: 100%; /* Full height */
// overflow: auto; /* Enable scroll if needed */
// background-color: rgb(0,0,0); /* Fallback color */
// background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
// `;