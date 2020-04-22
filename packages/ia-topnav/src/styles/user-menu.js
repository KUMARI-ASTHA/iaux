import { css } from 'lit-element';

export default css`
  @media (min-width: 890px) {
    .initial,
    .closed,
    .open {
      right: 26rem;
    }

    .search-hidden.initial,
    .search-hidden.closed,
    .search-hidden.open {
      right: 12rem;
    }
  }
`;