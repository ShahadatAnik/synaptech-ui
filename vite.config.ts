import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// Update the esBuild configuration
const esBuild = defineConfig({
	plugins: [react(), tailwindcss(), dts()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: './dist',
		cssCodeSplit: true,
		cssMinify: true,
		lib: {
			name: 'SynapTechUI',
			cssFileName: 'styles',
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				form: resolve(__dirname, 'src/core/form/index.ts'),
				table: resolve(__dirname, 'src/core/data-table/index.tsx'),
				modal: resolve(__dirname, 'src/core/modal/index.ts'),
				components: resolve(__dirname, 'src/components/index.ts'),
				'utils/validators': resolve(__dirname, 'src/utils/validators.ts'),
				hooks: resolve(__dirname, 'src/hooks/index.ts'),
				providers: resolve(__dirname, 'src/providers/index.ts'),
			},
			formats: ['es'],
			fileName: (format, entryName) => `${format}/${entryName}.js`,
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'tailwindcss',
				'tailwind-merge',
				'class-variance-authority',
				'clsx',
				'lucide-react',
			],
			output: {
				preserveModules: false,
				assetFileNames: 'assets/[name][extname]',
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});

const umBuild = defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			insertTypesEntry: true,
			include: ['src/components/**/*'],
			exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'SynapTechUI',
			fileName: (format) => `${format}/index.js`,
			formats: ['umd'],
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'tailwind-merge',
				'class-variance-authority',
				'@radix-ui/react-slot',
				'clsx',
				'lucide-react',
			],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'tailwind-merge': 'tailwindMerge',
					'class-variance-authority': 'cva',
					'@radix-ui/react-slot': 'Slot',
					clsx: 'clsx',
					'lucide-react': 'lucideReact',
				},
			},
		},

		sourcemap: true,
		emptyOutDir: true,
	},
});

export default defineConfig(({ mode }) => {
	return mode === 'umd' ? umBuild : esBuild;
});
