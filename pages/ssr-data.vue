<script lang="ts" setup>
const query = gql`
  query ExampleQuery {
    allFilms {
      totalCount
      films {
        id
        director
        title
      }
    }
  }
`;
const { data: ssrData } = await useAsyncQuery(query);
const { data: clientData, pending } = await useLazyAsyncQuery(query);
</script>

<template>
  <p>SSR Data: {{ ssrData?.allFilms?.films?.[0]?.title }}</p>
  <p>
    CSR Data: <span v-if="pending">Loading</span
    ><span v-else>{{ clientData?.allFilms?.films?.[1]?.title }}</span>
  </p>
</template>
