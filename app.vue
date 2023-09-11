<template>
  <NuxtLayout>
    <header>
       <nav>
         <ul>
           <li><NuxtLink to="/">Index</NuxtLink></li>
           <li><NuxtLink to="/two">Page 2</NuxtLink></li>
          <li><NuxtLink to="/ssr-data">SSR Data</NuxtLink></li>
         </ul>
       </nav>
     </header>
    <NuxtPage />
  </NuxtLayout>
</template>
