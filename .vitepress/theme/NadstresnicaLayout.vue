<!--.vitepress/theme/MyLayout.vue-->
<script setup>
    import DefaultTheme from 'vitepress/theme';
</script>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-image>
            <div style="text-align: center">
                <img src="/assets/nadstresnica-hero.png" alt="ssh-vault" />
                <br />
            </div>
        </template>
    </DefaultTheme.Layout>
</template>

<!-- <style>
    .VPHero .image-bg {
        display: none;
    }

    .VPHero .image-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style> -->