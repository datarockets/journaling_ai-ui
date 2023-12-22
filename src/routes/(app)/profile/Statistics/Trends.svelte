<script lang="ts">
    import {Chart} from 'flowbite-svelte'

    export let maxDays;
    export let moodsLabels = [];

    let sortedMoodPairs = [];
    $: {
        const moodFrequence = moodsLabels.reduce((frequence, label) => ({
            ...frequence,
            [label]: 1 + (frequence[label] || 0),
        }), {})

        sortedMoodPairs = Object.keys(moodFrequence).map(label => ({
            label,
            frequence: moodFrequence[label],
            percentage: Math.round(100 * moodFrequence[label] / moodsLabels.length), 
        })).sort(({frequence: f1}, {frequence: f2}) => f2 - f1)
    }

    function capitalize(s: string) {
        return `${s[0].toUpperCase()}${s.substring(1)}`
    }

    const chartOptions = {
          series: [moodsLabels.length, Math.max(maxDays - moodsLabels.length, 0)],
          colors: ["#CC4522", "#F2F2F2"],
          chart: {
            height: 320,
            width: "100%",
            type: "donut",
          },
          stroke: {
            colors: ["transparent"],
            lineCap: "",
          },
          tooltip: {enabled: false},
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true,
                    label: "Entries",
                    fontFamily: "Inter, sans-serif",
                    formatter: function () {
                      return `${moodsLabels.length}`
                    },
                  }
                },
                size: "80%",
              },
            },
          },
          grid: {
            padding: {
              top: -2,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          xaxis: {
            show: false,
          },
      }
</script>


<div class="grid grid-cols-2 items-center">
    <!-- Pie chart for frequence -->
    <div class="[&_.apexcharts-legend]:hidden">
        <Chart options={chartOptions} />
    </div>
    <div>
      <div class="grid grid-cols-2">
          {#each sortedMoodPairs as pair (pair.label)}
          <div>{capitalize(pair.label)}</div>
          <div class="text-right">{pair.percentage}%</div>
          {/each}
      </div>
    </div>
</div>
