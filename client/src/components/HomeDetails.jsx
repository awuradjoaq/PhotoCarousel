import React from 'react';
import { HomeDetailsContainer, HomeAddressContainer, HomeAddress, SecondLineHomeAddress, HomeInterior, HomeInteriorIcons, PreQualifiedButton, HomeInteriorDetails, HomePrice, PreQualifiedButtonContainer, StaticBookerContainer, StaticBooker } from './Styled.jsx';

const HomeDetails = (props) => (
  <HomeDetailsContainer>
    <HomeAddressContainer>
      <HomeAddress>
        <span className="firstlinehomeaddress">
          {props.listing.homeAddress}
        </span>
      </HomeAddress>
      <SecondLineHomeAddress>
        <span className="secondlinehomeaddress">
          {props.listing.cityState} {props.listing.zipCode}
        </span>
      </SecondLineHomeAddress>
    </HomeAddressContainer>
    <HomeInteriorDetails>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-05+at+8.57.56+PM.png">
          </HomeInteriorIcons>
          3 beds
        </span>
      </HomeInterior>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-05+at+8.58.15+PM.png">
          </HomeInteriorIcons>
          2 baths
        </span>
      </HomeInterior>
      <HomeInterior>
        <span className="homeinterior">
          <HomeInteriorIcons src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-05+at+8.58.22+PM.png">
          </HomeInteriorIcons>
          1,325 sqft
        </span>
      </HomeInterior>
    </HomeInteriorDetails>
    <HomePrice>
      <HomeAddress>
        <span>
          {props.listing.price.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </span>
      </HomeAddress>
      <SecondLineHomeAddress>
        <span>
          {`Est. Mortgage ${props.listing.estMortgage.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })}/mo`}
        </span>
      </SecondLineHomeAddress>
    </HomePrice>
    <PreQualifiedButtonContainer>
      <PreQualifiedButton>
        Get Pre-Qualified
      </PreQualifiedButton>
    </PreQualifiedButtonContainer>
    <StaticBookerContainer>
      <StaticBooker src="https://test-awuradjoa-quansah.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-11+at+10.29.04+PM.png">
      </StaticBooker>
    </StaticBookerContainer>
  </HomeDetailsContainer>
);

export default HomeDetails;
