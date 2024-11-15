/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoute = /* GraphQL */ `
  mutation CreateRoute(
    $input: CreateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    createRoute(input: $input, condition: $condition) {
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
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute(
    $input: UpdateRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    updateRoute(input: $input, condition: $condition) {
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
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute(
    $input: DeleteRouteInput!
    $condition: ModelRouteConditionInput
  ) {
    deleteRoute(input: $input, condition: $condition) {
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
export const createSpot = /* GraphQL */ `
  mutation CreateSpot(
    $input: CreateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    createSpot(input: $input, condition: $condition) {
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
export const updateSpot = /* GraphQL */ `
  mutation UpdateSpot(
    $input: UpdateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    updateSpot(input: $input, condition: $condition) {
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
export const deleteSpot = /* GraphQL */ `
  mutation DeleteSpot(
    $input: DeleteSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    deleteSpot(input: $input, condition: $condition) {
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
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
export const createRouteSpots = /* GraphQL */ `
  mutation CreateRouteSpots(
    $input: CreateRouteSpotsInput!
    $condition: ModelRouteSpotsConditionInput
  ) {
    createRouteSpots(input: $input, condition: $condition) {
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
export const updateRouteSpots = /* GraphQL */ `
  mutation UpdateRouteSpots(
    $input: UpdateRouteSpotsInput!
    $condition: ModelRouteSpotsConditionInput
  ) {
    updateRouteSpots(input: $input, condition: $condition) {
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
export const deleteRouteSpots = /* GraphQL */ `
  mutation DeleteRouteSpots(
    $input: DeleteRouteSpotsInput!
    $condition: ModelRouteSpotsConditionInput
  ) {
    deleteRouteSpots(input: $input, condition: $condition) {
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
