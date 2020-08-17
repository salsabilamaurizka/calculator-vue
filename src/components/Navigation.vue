<template>
    <nav>
        <div class="container">
			<router-link :to="{name: 'home'}" exact>SALSABILA MAURIZKA</router-link>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav">
					<li><router-link :to="{name: 'home'}" exact>HOME</router-link></li>
						<li><router-link :to="{name: 'calculator'}" exact>CALCULATOR</router-link></li>
						<li><router-link :to="{name: 'table'}" exact>TABLE</router-link></li>
				</ul>
			</div>
		</div>
    </nav>
	
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

<style scoped lang="scss">
	.container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 40px;
		margin-right: 40px;
	}
	.navbar-nav{
		list-style: none;
	}
	li{
		display: inline;
		margin-left: 10px;
		margin-right: 10px;
	}
	a{
		text-decoration: none;
		color: black;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>