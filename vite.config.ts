import { dirname, resolve as pathResolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Update the esBuild configuration
const esBuild = defineConfig({
	plugins: [react(), tailwindcss(), dts(), visualizer() as PluginOption],
	resolve: {
		alias: {
			'@': pathResolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: './dist',
		cssCodeSplit: true,
		cssMinify: true,
		sourcemap: false,
		emptyOutDir: true,
		lib: {
			name: 'SynapTechUI',
			entry: {
				index: pathResolve(__dirname, 'src/index.ts'),
				form: pathResolve(__dirname, 'src/core/form/index.ts'),
				table: pathResolve(__dirname, 'src/core/data-table/index.tsx'),
				modal: pathResolve(__dirname, 'src/core/modal/index.ts'),
				components: pathResolve(__dirname, 'src/components/index.ts'),
				'utils/validators': pathResolve(__dirname, 'src/utils/validators.ts'),
				hooks: pathResolve(__dirname, 'src/hooks/index.ts'),
				providers: pathResolve(__dirname, 'src/providers/index.ts'),
			},
			formats: ['es'],
			fileName: (format, entryName) => `${format}/${entryName}.js`,
			cssFileName: 'styles',
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
				'@tanstack/react-table',
				'@handsontable/react',
				'handsontable',
				'date-fns',
				'react-csv',
				'cmdk',
				'@radix-ui/react-slot',
				'@radix-ui/react-icons',
				'zod',
				'zod_utilz',
				'axios',
			],
			output: {
				preserveModules: true,
				assetFileNames: 'assets/[name][extname]',
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					tailwindcss: 'tailwindcss',
					'tailwind-merge': 'tailwindMerge',
					'class-variance-authority': 'classVarianceAuthority',
					clsx: 'clsx',
					'lucide-react': 'lucideReact',
				},
			},
		},
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
		sourcemap: false,
		emptyOutDir: true,
		lib: {
			entry: pathResolve(__dirname, 'src/index.ts'),
			name: 'SynapTechUI',
			fileName: (format) => `${format}/index.js`,
			formats: ['umd'],
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
				'@tanstack/react-table',
				'@handsontable/react',
				'handsontable',
				'date-fns',
				'react-csv',
				'cmdk',
				'@radix-ui/react-slot',
				'@radix-ui/react-icons',
				'zod',
				'zod_utilz',
				'axios',
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
	},
});

export default defineConfig(({ mode }) => {
	return mode === 'umd' ? umBuild : esBuild;
});
