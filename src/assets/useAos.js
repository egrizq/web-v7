import { onMounted } from 'vue';
import AOS from 'aos';

export function useAos() {
  onMounted(() => {
    AOS.init();
  });
}