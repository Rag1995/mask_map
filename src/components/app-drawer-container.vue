<template>
  <b-card-body class="small">
    <b-card-title>
      <slot name="name" />
    </b-card-title>

    <p>
      <slot name="info" />
    </p>
    <hr />

    <p class="d-flex flex-wrap">
      <slot name="mask" />
    </p>
    <hr />

    <p>
      <slot name="note" />
    </p>
    <hr />

    <p>
      <slot name="open-on" />
    </p>

    <p class="text-right">
      <slot name="updateAt" />
    </p>
  </b-card-body>
</template>
