<template>
    <div class="container">
		<b-navbar toggleable="lg" type="light">
			<b-navbar-brand href="#">SALSABILA MAURIZKA</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item :to="{name: 'home'}">Home</b-nav-item>
				<b-nav-item :to="{name: 'calculator'}">Calculator</b-nav-item>
				<b-nav-item :to="{name: 'table'}">Table</b-nav-item>
			</b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
	
</template>

<script>
export default {
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
	methods: {
		toggleNav () {
			const nav = this.$refs.nav.classList
			nav.contains('active') ? nav.remove('active') : nav.add('active')
		}
	}
}
</script>