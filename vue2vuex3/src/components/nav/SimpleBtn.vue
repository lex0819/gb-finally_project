<template>
    <div>
        <a class="simple__btn">
            <slot></slot>
            <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                    stroke="#CDA274"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                />
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'SimpleBtn',
};
</script>
