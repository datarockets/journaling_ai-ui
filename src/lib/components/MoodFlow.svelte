<script lang="ts">
	import {Chart} from 'flowbite-svelte';

	export let datapoints: ReadonlyArray<{date: number | string, mood: number}> = [];

	let options = {
    chart: {
      height: '250px',
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2']
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      }
    },
    series: [
      {
        name: 'Mood',
        data: datapoints.map(({mood, date}) => [date, mood]),
        color: '#EF562F'
      }
    ],
    xaxis: {
	  type: "datetime",
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
	  labels: {
		formatter (value: number) { return `${value}%` }
	  }
    }
  };
</script>

<Chart {options} />