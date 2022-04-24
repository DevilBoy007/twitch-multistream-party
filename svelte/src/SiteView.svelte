<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas-Neue&display=swap" rel="stylesheet">
</head>
<style>
h1, a
{
	color:deepskyblue;
	text-shadow: -1px 1px 4px #0074ff
}
</style>
<script>
	export let url
	export let title
</script>
<body>
	<h1 style="color:deepskyblue;font-family:Bebas Neue; padding-left: 1vw;"><a href={url}>{title}</a></h1>
		<iframe title="site" width="300" height="200" src={url} style="background-color:grey;border-radius:12px;box-shadow: -4px 2px 12px #FFF"/>
</body>
