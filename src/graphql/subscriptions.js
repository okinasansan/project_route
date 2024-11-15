/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute(
    $filter: ModelSubscriptionRouteFilterInput
    $owner: String
  ) {
    onCreateRoute(filter: $filter, owner: $owner) {
      id
      name
      description
      spots {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute(
    $filter: ModelSubscriptionRouteFilterInput
    $owner: String
  ) {
    onUpdateRoute(filter: $filter, owner: $owner) {
      id
      name
      description
      spots {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute(
    $filter: ModelSubscriptionRouteFilterInput
    $owner: String
  ) {
    onDeleteRoute(filter: $filter, owner: $owner) {
      id
      name
      description
      spots {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot($filter: ModelSubscriptionSpotFilterInput) {
    onCreateSpot(filter: $filter) {
      id
      address
      work
      genre
      characters {
        nextToken
        __typename
      }
      routes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot($filter: ModelSubscriptionSpotFilterInput) {
    onUpdateSpot(filter: $filter) {
      id
      address
      work
      genre
      characters {
        nextToken
        __typename
      }
      routes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot($filter: ModelSubscriptionSpotFilterInput) {
    onDeleteSpot(filter: $filter) {
      id
      address
      work
      genre
      characters {
        nextToken
        __typename
      }
      routes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onCreateCharacter(filter: $filter, owner: $owner) {
      id
      name
      spotID
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onUpdateCharacter(filter: $filter, owner: $owner) {
      id
      name
      spotID
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $filter: ModelSubscriptionCharacterFilterInput
    $owner: String
  ) {
    onDeleteCharacter(filter: $filter, owner: $owner) {
      id
      name
      spotID
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateRouteSpots = /* GraphQL */ `
  subscription OnCreateRouteSpots(
    $filter: ModelSubscriptionRouteSpotsFilterInput
    $owner: String
  ) {
    onCreateRouteSpots(filter: $filter, owner: $owner) {
      id
      routeId
      spotId
      route {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateRouteSpots = /* GraphQL */ `
  subscription OnUpdateRouteSpots(
    $filter: ModelSubscriptionRouteSpotsFilterInput
    $owner: String
  ) {
    onUpdateRouteSpots(filter: $filter, owner: $owner) {
      id
      routeId
      spotId
      route {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteRouteSpots = /* GraphQL */ `
  subscription OnDeleteRouteSpots(
    $filter: ModelSubscriptionRouteSpotsFilterInput
    $owner: String
  ) {
    onDeleteRouteSpots(filter: $filter, owner: $owner) {
      id
      routeId
      spotId
      route {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
